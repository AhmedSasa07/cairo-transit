import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import BottomNavigation from './components/BottomNavigation.jsx';
import RoutePlanner from './components/RoutePlanner.jsx';
import NetworkGuide from './components/NetworkGuide.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import NearestStationFinder from './components/NearestStationFinder.jsx';
import StationExplorer from './components/StationExplorer.jsx';
import TicketGuide from './components/TicketGuide.jsx';
import StationDetailModal from './components/StationDetailModal.jsx';
import OperatingHoursModal from './components/OperatingHoursModal.jsx';
import PdfMapModal from './components/PdfMapModal.jsx';
import { translations } from './utils/translations.js';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('egymetro_lang') || 'en';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('egymetro_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeTab, setActiveTab] = useState('route'); // 'route', 'network', 'map', 'nearest', 'tickets'
  const [preselectedOrigin, setPreselectedOrigin] = useState('al_shohadaa');
  const [preselectedDestination, setPreselectedDestination] = useState('opera');
  const [modalStation, setModalStation] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [nearestGpsStation, setNearestGpsStation] = useState(null);

  // Sync lang & document direction
  useEffect(() => {
    localStorage.setItem('egymetro_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync dark mode class & root background
  useEffect(() => {
    localStorage.setItem('egymetro_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0A0A0B';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#F4F4F5';
    }
  }, [darkMode]);

  const t = translations[lang];

  // Cross-tab actions
  const handleSetOrigin = (stationId) => {
    setPreselectedOrigin(stationId);
    setActiveTab('route');
  };

  const handleSetDestination = (stationId) => {
    setPreselectedDestination(stationId);
    setActiveTab('route');
  };

  return (
    <div className={`min-h-screen bg-[#F4F4F5] dark:bg-[#0A0A0B] text-slate-900 dark:text-[#F4F4F5] ${lang === 'ar' ? 'font-cairo' : 'font-sans'} flex flex-col selection:bg-rose-600 selection:text-white`}>
      {/* Top Header */}
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        t={t}
        onOpenSchedule={() => setShowScheduleModal(true)}
        onOpenPdfMap={() => setShowPdfModal(true)}
        sticky={activeTab !== 'route'}
      />

      {/* Main Content Area */}
      <main className={`flex-1 ${activeTab === 'map' ? 'w-full max-w-none p-0 overflow-hidden relative flex flex-col' : 'max-w-xl mx-auto w-full px-3 sm:px-4 pt-3 sm:pt-4'}`}>
        {activeTab === 'route' && (
          <div className="animate-fade-in">
            <RoutePlanner
              lang={lang}
              t={t}
              preselectedOrigin={preselectedOrigin}
              preselectedDestination={preselectedDestination}
              onClearPreselected={() => {
                setPreselectedOrigin(null);
                setPreselectedDestination(null);
              }}
              onSelectStationForModal={setModalStation}
              onOpenPdfMap={() => setShowPdfModal(true)}
              nearestGpsStation={nearestGpsStation}
            />
          </div>
        )}

        {activeTab === 'network' && (
          <div className="animate-fade-in">
            <NetworkGuide
              lang={lang}
              t={t}
              onSetOrigin={handleSetOrigin}
              onSetDestination={handleSetDestination}
              onSelectStationForModal={setModalStation}
              onOpenPdfMap={() => setShowPdfModal(true)}
            />
          </div>
        )}

        {activeTab === 'map' && (
          <div className="animate-fade-in w-full h-full flex-1 flex flex-col">
            <InteractiveMap
              lang={lang}
              t={t}
              darkMode={darkMode}
              onSetOrigin={handleSetOrigin}
              onSetDestination={handleSetDestination}
              onSelectStationForModal={setModalStation}
              onOpenPdfMap={() => setShowPdfModal(true)}
            />
          </div>
        )}

        {activeTab === 'nearest' && (
          <div className="animate-fade-in">
            <NearestStationFinder
              lang={lang}
              t={t}
              onPlanRouteToStation={handleSetDestination}
              onPlanRouteFromStation={handleSetOrigin}
              onSelectStationForModal={setModalStation}
              setNearestGpsStation={setNearestGpsStation}
            />
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="animate-fade-in">
            <TicketGuide
              lang={lang}
              t={t}
            />
          </div>
        )}
      </main>

      {/* Station Details Sheet Modal */}
      {modalStation && (
        <StationDetailModal
          station={modalStation}
          lang={lang}
          t={t}
          onClose={() => setModalStation(null)}
          onSetOrigin={handleSetOrigin}
          onSetDestination={handleSetDestination}
        />
      )}

      {/* Operating Hours Modal */}
      {showScheduleModal && (
        <OperatingHoursModal
          lang={lang}
          t={t}
          onClose={() => setShowScheduleModal(false)}
        />
      )}

      {/* Official Cairo Metro Schematic Map PDF Modal */}
      {showPdfModal && (
        <PdfMapModal
          lang={lang}
          t={t}
          onClose={() => setShowPdfModal(false)}
        />
      )}

      {/* Bottom Mobile Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        t={t}
        lang={lang}
      />
    </div>
  );
}
