import React, { memo } from 'react';
import { StationNode, StationLabelsLayerProps } from '../../types/map';

const LINE_COLOR_MAP: Record<string, string> = {
  M1: '#00518e',
  M2: '#c13038',
  M3: '#009f87',
  LRT: '#9e1b33',
  MONORAIL_E: '#009ca6',
  MONORAIL_W: '#9b2521'
};

const StationLabelsLayer: React.FC<StationLabelsLayerProps> = ({
  stations,
  scale,
  selectedStationId,
  onStationClick,
  lang = 'ar'
}) => {
  const isAr = lang === 'ar';

  // Dynamic Level of Detail (LOD) thresholds
  // Zoom < 1.5x: Show major interchange nodes only.
  // Zoom >= 1.5x: Smoothly fade in local stations.
  const isDetailed = scale >= 1.45;
  const localOpacity = Math.min(1, Math.max(0, (scale - 1.4) / 0.35));

  // Font Counter-Scaling (1 / scale)
  // Ensures rendered text on screen maintains a stable 11px - 14px size regardless of zoom
  const targetScreenFontSize = 13;
  const svgFontSize = Math.max(8, Number((targetScreenFontSize / scale).toFixed(2)));
  const hubFontSize = Math.max(10, Number((15 / scale).toFixed(2)));

  // 44px minimum invisible touch hitbox converted to SVG coordinates
  const hitRadius = Math.max(24, Number((26 / scale).toFixed(1)));

  return (
    <svg
      viewBox="0 0 4000 3000"
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ overflow: 'visible' }}
    >
      {stations.map((st) => {
        const isSelected = st.id === selectedStationId;
        const isHub = st.is_interchange;
        const lineColor = LINE_COLOR_MAP[st.line] || '#00518e';

        // Visibility decision based on LOD
        const shouldShowLabel = isHub || isSelected || isDetailed;
        const labelOpacity = (isHub || isSelected) ? 1 : localOpacity;

        return (
          <g
            key={st.id}
            id={`label-group-${st.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onStationClick(st);
            }}
            className="cursor-pointer group"
          >
            {/* 44x44px minimum invisible touch hitbox */}
            <circle
              cx={st.x}
              cy={st.y}
              r={hitRadius}
              fill="transparent"
              className="cursor-pointer"
            />

            {/* Selection Pulse Spotlight Ring */}
            {isSelected && (
              <circle
                cx={st.x}
                cy={st.y}
                r={isHub ? 38 : 28}
                fill="none"
                stroke="#FF4A1C"
                strokeWidth={Math.max(3, 4 / scale)}
                className="animate-ping opacity-60"
              />
            )}

            {/* Station Marker */}
            {isHub ? (
              <g>
                <circle
                  cx={st.x}
                  cy={st.y}
                  r="24"
                  fill="#FFFFFF"
                  stroke="#ecc15f"
                  strokeWidth="8"
                />
                <circle
                  cx={st.x}
                  cy={st.y}
                  r="12"
                  fill="#ecc15f"
                />
              </g>
            ) : (
              <circle
                cx={st.x}
                cy={st.y}
                r={isSelected ? 16 : 12}
                fill="#FFFFFF"
                stroke={lineColor}
                strokeWidth={isSelected ? 7 : 5}
              />
            )}

            {/* Station Typography Label */}
            {shouldShowLabel && (
              <g
                style={{
                  opacity: labelOpacity,
                  transition: 'opacity 220ms ease-in-out'
                }}
              >
                {/* Contrast Backdrop Filter Stroke */}
                <text
                  x={st.x}
                  y={st.y + (isHub ? 34 : 24) + svgFontSize}
                  textAnchor="middle"
                  fontSize={isHub ? hubFontSize : svgFontSize}
                  fontWeight={isHub ? '900' : '700'}
                  fontFamily="'Cairo', 'Helvetica Bold', -apple-system, sans-serif"
                  fill="none"
                  stroke="#0A0A0C"
                  strokeWidth={Math.max(2.5, 4 / scale)}
                  strokeLinejoin="round"
                  className="select-none pointer-events-none"
                >
                  {isAr ? st.name_ar : st.name_en}
                </text>

                {/* Main Foreground Text */}
                <text
                  x={st.x}
                  y={st.y + (isHub ? 34 : 24) + svgFontSize}
                  textAnchor="middle"
                  fontSize={isHub ? hubFontSize : svgFontSize}
                  fontWeight={isHub ? '900' : '700'}
                  fontFamily="'Cairo', 'Helvetica Bold', -apple-system, sans-serif"
                  fill={isHub ? '#ecc15f' : '#FFFFFF'}
                  className="select-none pointer-events-none"
                >
                  {isAr ? st.name_ar : st.name_en}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default memo(StationLabelsLayer);
