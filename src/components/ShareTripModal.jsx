import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Share2,
  Copy,
  Download,
  Check,
  MessageSquare
} from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';
import { getTripDescription, getCleanLineName, getCleanDirectionName } from '../utils/routing.js';
import { useSheetDragToDismiss } from '../utils/motion.js';

export default function ShareTripModal({ route, lang, t, onClose }) {
  const [copied, setCopied] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const canvasRef = useRef(null);

  const { handlers: dragHandlers, sheetStyle } = useSheetDragToDismiss({ onClose });

  const isAr = lang === 'ar';
  const originName = isAr ? route.origin.nameAr : route.origin.nameEn;
  const destName = isAr ? route.destination.nameAr : route.destination.nameEn;

  // Build the complete formatted WhatsApp / Text message (NO EMOJIS, NO ASTERISKS)
  const buildTextMessage = () => {
    const desc = getTripDescription(route, lang);
    const lines = [];

    lines.push(isAr
      ? `خط سير الرحلة: من ${originName} إلى ${destName}`
      : `Transit Route: ${originName} to ${destName}`);
    lines.push('');
    lines.push(isAr ? 'تفاصيل المشوار:' : 'Trip Description:');
    lines.push(desc);
    lines.push('');
    lines.push(isAr
      ? `الوقت المتوقع: ~${route.travelTimeMins} دقيقة`
      : `Estimated Time: ~${route.travelTimeMins} mins`);
    lines.push(isAr
      ? `عدد المحطات: ${route.stationCount}`
      : `Stations: ${route.stationCount}`);
    lines.push(isAr
      ? `سعر التذكرة: ${route.fareDetails.totalCost} جنيه ${route.ticketTier ? `(${route.ticketTier.ticketColorAr})` : ''}`
      : `Ticket Price: ${route.fareDetails.totalCost} EGP ${route.ticketTier ? `(${route.ticketTier.ticketColorEn})` : ''}`);
    lines.push(isAr
      ? `التحويلات: ${route.transfersCount === 0 ? 'مباشر بدون تبديل' : `${route.transfersCount} تحويلة`}`
      : `Transfers: ${route.transfersCount === 0 ? 'Direct (No Transfers)' : `${route.transfersCount} transfer(s)`}`);
    lines.push('');
    lines.push(isAr ? 'دليل مترو مصر (Egy Metro Guide)' : 'Egy Metro Guide');

    return lines.join('\n').replace(/\*/g, '');
  };

  const textMessage = buildTextMessage();

  // Copy text to clipboard
  const handleCopyText = async () => {
    haptics.selection();
    try {
      await navigator.clipboard.writeText(textMessage);
      setCopied(true);
      haptics.success();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = textMessage;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      haptics.success();
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Open WhatsApp with pre-filled text
  const handleOpenWhatsApp = () => {
    haptics.light();
    const encoded = encodeURIComponent(textMessage);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Generate visual trip card on HTML5 Canvas (800x1000 px, high contrast, clean)
  const generateTripImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = 800;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    // Background Gradient (Graphite #0A0A0B to #111113)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#0A0A0B');
    bgGrad.addColorStop(0.5, '#111113');
    bgGrad.addColorStop(1, '#0A0A0B');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Decorative subtle accent glows
    ctx.save();
    ctx.beginPath();
    ctx.arc(width * 0.85, 90, 180, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 74, 28, 0.08)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.15, height - 120, 200, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(45, 216, 129, 0.06)';
    ctx.fill();
    ctx.restore();

    // Top Brand Bar: Cairo Metro Brand Banner
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 26px "Space Grotesk", "Cairo", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('EGY METRO GUIDE • دليل مترو مصر', 45, 65);

    ctx.fillStyle = '#A1A1AA';
    ctx.font = '500 16px "Space Grotesk", "Cairo", sans-serif';
    ctx.fillText(
      isAr ? 'بطاقة مسار الرحلة الرسمية • مسار معتمد وموثوق' : 'Official Transit Route • Verified Metro Navigation',
      45,
      95
    );

    // Hairline Divider
    ctx.strokeStyle = '#26262C';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(45, 120);
    ctx.lineTo(width - 45, 120);
    ctx.stroke();

    // Origin -> Destination Hero Card
    ctx.fillStyle = '#17171A';
    ctx.beginPath();
    ctx.roundRect(45, 138, width - 90, 156, 18);
    ctx.fill();
    ctx.strokeStyle = '#26262C';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // From
    ctx.fillStyle = '#71717A';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText(isAr ? 'محطة الانطلاق (FROM)' : 'ORIGIN STATION', 70, 172);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 28px "Space Grotesk", "Cairo", sans-serif';
    ctx.fillText(originName, 70, 206);

    // Arrow Down & To
    ctx.fillStyle = '#FF4A1C';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('➔', 70, 242);

    ctx.fillStyle = '#71717A';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText(isAr ? 'محطة الوصول (TO)' : 'DESTINATION STATION', 105, 242);

    ctx.fillStyle = '#2DD881';
    ctx.font = '900 28px "Space Grotesk", "Cairo", sans-serif';
    ctx.fillText(destName, 70, 276);

    // Right-side route transfer badge
    const badgeW = 164;
    const badgeH = 38;
    const badgeX = width - 45 - badgeW - 20;
    const badgeY = 197;
    const isDirect = route.transfersCount === 0;

    ctx.fillStyle = isDirect ? 'rgba(45, 216, 129, 0.12)' : 'rgba(255, 74, 28, 0.12)';
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 19);
    ctx.fill();
    ctx.strokeStyle = isDirect ? 'rgba(45, 216, 129, 0.35)' : 'rgba(255, 74, 28, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = isDirect ? '#2DD881' : '#FF4A1C';
    ctx.font = 'bold 15px "Space Grotesk", "Cairo", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      isDirect
        ? (isAr ? '🚇 مسار مباشر' : '🚇 Direct Route')
        : (isAr ? `🚇 ${route.transfersCount} تحويل` : `🚇 ${route.transfersCount} Transfers`),
      badgeX + badgeW / 2,
      badgeY + 24
    );
    ctx.textAlign = 'left';

    // 3 Clean Stat Badges: Time (دقيقة), Stations (محطة), Fare (جنيه)
    const statBoxY = 312;
    const statBoxW = (width - 90 - 24) / 3;
    const statBoxH = 94;

    const stats = [
      {
        label: isAr ? 'الوقت التقريبي' : 'EST. TIME',
        val: `${route.travelTimeMins}`,
        unit: isAr ? 'دقيقة' : 'mins',
        color: '#FF4A1C'
      },
      {
        label: isAr ? 'عدد المحطات' : 'STATIONS',
        val: `${route.stationCount}`,
        unit: isAr ? 'محطة' : 'stops',
        color: '#FFFFFF'
      },
      {
        label: isAr ? 'سعر التذكرة' : 'FARE',
        val: `${route.fareDetails.totalCost}`,
        unit: isAr ? 'جنيه' : 'EGP',
        color: '#2DD881'
      }
    ];

    stats.forEach((st, i) => {
      const bx = 45 + i * (statBoxW + 12);
      ctx.fillStyle = '#17171A';
      ctx.beginPath();
      ctx.roundRect(bx, statBoxY, statBoxW, statBoxH, 16);
      ctx.fill();
      ctx.strokeStyle = '#26262C';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#71717A';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(st.label, bx + statBoxW / 2, statBoxY + 30);

      ctx.fillStyle = st.color;
      ctx.font = '900 24px "Space Grotesk", "Cairo", sans-serif';
      ctx.fillText(`${st.val} ${st.unit}`, bx + statBoxW / 2, statBoxY + 68);
    });

    // Step-by-Step Route Overview Legs Box
    const timelineY = 424;
    const timelineH = 490;
    ctx.fillStyle = '#17171A';
    ctx.beginPath();
    ctx.roundRect(45, timelineY, width - 90, timelineH, 18);
    ctx.fill();
    ctx.strokeStyle = '#26262C';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 20px "Space Grotesk", "Cairo", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(isAr ? 'مسار الرحلة والتبديل:' : 'ROUTE INSTRUCTIONS & TRANSFERS:', 70, timelineY + 42);

    let curY = timelineY + 86;
    route.legs.forEach((leg, lIdx) => {
      const legLineName = getCleanLineName(leg, lang);
      const legDir = getCleanDirectionName(leg, lang);
      const startSt = isAr ? leg.stations[0]?.nameAr : leg.stations[0]?.nameEn;
      const endSt = isAr ? leg.stations[leg.stations.length - 1]?.nameAr : leg.stations[leg.stations.length - 1]?.nameEn;
      const legCount = leg.stationCount || (leg.stations.length - 1);

      // Line color dot
      ctx.fillStyle = leg.lineInfo?.color || '#2563EB';
      ctx.beginPath();
      ctx.arc(75, curY - 6, 9, 0, Math.PI * 2);
      ctx.fill();

      // Leg step title
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 19px "Space Grotesk", "Cairo", sans-serif';
      const stepTitle = lIdx === 0
        ? (isAr ? `اركب من محطة [${startSt}]` : `Board at [${startSt}]`)
        : (isAr ? `بدّل في محطة [${startSt}]` : `Transfer at [${startSt}]`);
      ctx.fillText(stepTitle, 95, curY);

      // Line & direction details
      ctx.fillStyle = '#FF4A1C';
      ctx.font = '600 16px "Space Grotesk", "Cairo", sans-serif';
      const dirText = isAr ? `➔ ${legLineName} (اتجاه ${legDir})` : `➔ ${legLineName} (heading to ${legDir})`;
      ctx.fillText(dirText, 95, curY + 28);

      // Stations list overview
      ctx.fillStyle = '#A1A1AA';
      ctx.font = '500 15px "JetBrains Mono", monospace';
      ctx.fillText(
        isAr ? `مر بـ ${legCount} محطة وصولاً إلى [${endSt}]` : `Ride ${legCount} stations to [${endSt}]`,
        95,
        curY + 54
      );

      curY += 96;
    });

    // Final Arrival Destination Badge
    ctx.fillStyle = '#2DD881';
    ctx.beginPath();
    ctx.arc(75, curY - 6, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2DD881';
    ctx.font = '900 19px "Space Grotesk", "Cairo", sans-serif';
    ctx.fillText(isAr ? `الوصول إلى محطة: ${destName}` : `Arrive at: ${destName}`, 95, curY);

    // Footer
    ctx.fillStyle = '#71717A';
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(
      isAr
        ? 'تم استخراج المسار بدقة عبر تطبيق دليل مترو مصر • يعمل بدون إنترنت'
        : 'Generated accurately by Egy Metro Guide App • Works 100% Offline',
      width / 2,
      height - 30
    );

    // Export as lightweight JPEG (< 85 KB)
    canvas.toBlob((blob) => {
      if (blob) {
        setImageBlob(blob);
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      }
    }, 'image/jpeg', 0.82);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      generateTripImage();
    }, 120);
    return () => clearTimeout(timer);
  }, [route]);

  // Download / Save Image to Device
  const handleDownloadImage = async () => {
    haptics.selection();
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      const base64Data = dataUrl.split(',')[1];

      if (Capacitor.isNativePlatform()) {
        const fileName = `Metro_Trip_${Date.now()}.jpg`;
        await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: Directory.Documents,
          recursive: true
        });
        setSaveSuccess(true);
        haptics.success();
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `Metro_Trip_${originName}_to_${destName}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setSaveSuccess(true);
        haptics.success();
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.warn('Direct save error, falling back to share', err);
      try {
        const base64Data = canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
        const fileName = `Metro_Trip_${Date.now()}.jpg`;
        const cacheFile = await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: Directory.Cache
        });
        await Share.share({
          title: `Metro Trip: ${originName} to ${destName}`,
          url: cacheFile.uri,
          dialogTitle: isAr ? 'حفظ أو مشاركة الصورة' : 'Save or Share Image'
        });
      } catch (_) {}
    }
  };

  // Native Web & Android Share with Image File and Telegram/WhatsApp Support
  const handleNativeShare = async () => {
    haptics.selection();
    const canvas = canvasRef.current;

    try {
      if (Capacitor.isNativePlatform() && canvas) {
        // Native Android: Write small JPEG to cache and trigger Android system chooser
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        const base64Data = dataUrl.split(',')[1];
        const fileName = `metro_trip_${Date.now()}.jpg`;

        const fileResult = await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: Directory.Cache
        });

        await Share.share({
          title: `دليل مترو مصر: ${originName} ➔ ${destName}`,
          text: textMessage,
          url: fileResult.uri,
          dialogTitle: isAr ? 'مشاركة بطاقة ومسار الرحلة (تيليجرام / واتساب / ماسنجر)' : 'Share Trip Card & Directions'
        });
        haptics.success();
        return;
      }

      // Web platform share
      if (imageBlob && navigator.canShare && navigator.canShare({ files: [new File([imageBlob], 'trip.jpg', { type: 'image/jpeg' })] })) {
        const file = new File([imageBlob], `Metro_Trip_${originName}_to_${destName}.jpg`, { type: 'image/jpeg' });
        await navigator.share({
          title: `دليل مترو مصر: ${originName} ➔ ${destName}`,
          text: textMessage,
          files: [file]
        });
        haptics.success();
      } else if (navigator.share) {
        await navigator.share({
          title: `دليل مترو مصر: ${originName} ➔ ${destName}`,
          text: textMessage
        });
        haptics.success();
      } else {
        handleOpenWhatsApp();
      }
    } catch (err) {
      console.log('Share dismissed or cancelled', err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        style={sheetStyle}
        className="bg-white dark:bg-[#111113] w-full max-w-lg max-h-[92vh] rounded-t-[32px] sm:rounded-[28px] shadow-2xl border-t sm:border border-slate-200 dark:border-[#26262C] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab Bar (Draggable down to dismiss) */}
        <div
          {...dragHandlers}
          className="w-full py-2.5 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none sm:hidden flex-shrink-0"
        >
          <div className="w-10 h-1.5 bg-slate-300 dark:bg-[#26262C] rounded-full" />
        </div>

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-[#1D1D22] flex items-center justify-between bg-slate-50/50 dark:bg-[#111113] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FF4A1C]/10 border border-[#FF4A1C]/25 flex items-center justify-center text-[#FF4A1C] shadow-sm">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-space font-extrabold uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                {isAr ? 'مشاركة مسار الرحلة' : 'Share Trip Directions'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-[#A1A1AA] font-cairo">
                {originName} ➔ {destName}
              </p>
            </div>
          </div>

          <PressableScale
            onClick={() => {
              haptics.light();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-[#17171A] border border-transparent dark:border-[#26262C]"
          >
            <X className="w-4 h-4" />
          </PressableScale>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-start">
          {/* Action Row 1: WhatsApp Button & Copy Button */}
          <div className="grid grid-cols-2 gap-2.5">
            <PressableScale
              onClick={handleOpenWhatsApp}
              className="py-3 px-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-cairo font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'إرسال عبر واتساب' : 'WhatsApp'}</span>
            </PressableScale>

            <PressableScale
              onClick={handleCopyText}
              className="py-3 px-3 rounded-2xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-900 dark:text-white font-cairo font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-[#26262C] transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? (isAr ? 'تم نسخ النص!' : 'Copied!') : (isAr ? 'نسخ الخطوات' : 'Copy Text')}</span>
            </PressableScale>
          </div>

          {/* Action Row 2: Native Share (Telegram, WhatsApp, etc) / Download Card Image */}
          <div className="grid grid-cols-2 gap-2.5">
            <PressableScale
              onClick={handleNativeShare}
              className="py-2.5 px-3 rounded-2xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white font-cairo font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#FF4A1C]/20 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>{isAr ? 'مشاركة الصورة والتطبيقات' : 'Share Card Image'}</span>
            </PressableScale>

            <PressableScale
              onClick={handleDownloadImage}
              className="py-2.5 px-3 rounded-2xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-700 dark:text-slate-300 font-cairo font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-[#26262C] transition-all"
            >
              {saveSuccess ? <Check className="w-4 h-4 text-emerald-500" /> : <Download className="w-4 h-4" />}
              <span>{saveSuccess ? (isAr ? 'تم حفظ الصورة!' : 'Saved!') : (isAr ? 'حفظ الصورة' : 'Save Image')}</span>
            </PressableScale>
          </div>

          {/* Visual Trip Card Preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs px-1">
              <span className={`text-[11px] font-bold ${isAr ? 'font-cairo text-slate-700 dark:text-[#A1A1AA]' : 'font-space uppercase tracking-wider text-slate-600 dark:text-[#A1A1AA]'}`}>
                {isAr ? 'بطاقة مسار الرحلة' : 'Trip Route Card'}
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-[#26262C] shadow-md bg-[#0A0A0B] flex justify-center p-2">
              <canvas
                ref={canvasRef}
                className="w-full max-w-[340px] rounded-xl shadow-inner block"
              />
            </div>
          </div>

          {/* Text Message Preview Box */}
          <div className="space-y-1.5">
            <span className={`text-[11px] font-bold px-1 ${isAr ? 'font-cairo text-slate-700 dark:text-[#A1A1AA]' : 'font-space uppercase tracking-wider text-slate-600 dark:text-[#A1A1AA]'}`}>
              {isAr ? 'تفاصيل مشوارك (نص الرسالة)' : 'Trip Description (Message Text)'}
            </span>
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200 dark:border-[#26262C] text-xs font-cairo text-slate-800 dark:text-[#D4D4D8] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto select-all">
              {textMessage}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-50/80 dark:bg-[#111113] border-t border-slate-200 dark:border-[#1D1D22] flex items-center justify-end text-xs text-slate-500 dark:text-[#71717A] flex-shrink-0 pb-safe">
          <PressableScale
            onClick={() => {
              haptics.light();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-slate-200 dark:bg-[#17171A] hover:bg-slate-300 dark:hover:bg-[#212127] text-slate-800 dark:text-white font-cairo font-bold border border-slate-300 dark:border-[#26262C] text-center"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </PressableScale>
        </div>
      </div>
    </div>
  );
}
