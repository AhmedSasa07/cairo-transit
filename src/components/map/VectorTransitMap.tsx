import React, { useState, useRef, useCallback } from 'react';
import MapViewport from './MapViewport';
import StationDetailCard from '../ui/StationDetailCard';
import MapFloatingControls from './MapFloatingControls';
import { StationNode } from '../../types/map';

interface VectorTransitMapProps {
  lang?: 'ar' | 'en';
  isDarkMode?: boolean;
  onSetOrigin?: (stationId: string) => void;
  onSetDestination?: (stationId: string) => void;
  onOpenPdfMap?: () => void;
}

export default function VectorTransitMap({
  lang = 'ar',
  isDarkMode = true,
  onSetOrigin,
  onSetDestination,
  onOpenPdfMap
}: VectorTransitMapProps) {
  const [selectedStation, setSelectedStation] = useState<StationNode | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(1.0);

  const viewportRef = useRef<any>(null);

  const handleStationSelect = useCallback((station: StationNode) => {
    setSelectedStation(station);
  }, []);

  const handleZoomIn = () => {
    setCurrentZoom(prev => Math.min(4.5, prev * 1.3));
  };

  const handleZoomOut = () => {
    setCurrentZoom(prev => Math.max(0.7, prev / 1.3));
  };

  const handleRecenterStadium = () => {
    // Cairo Stadium node is at (1788, 1424) in 4000x3000 world
    setSelectedStation(null);
    setCurrentZoom(1.1);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] flex-1 overflow-hidden select-none">
      {/* 60 FPS Infinite Canvas Viewport */}
      <MapViewport
        initialCenter={{ x: 1788, y: 1424 }}
        initialZoom={currentZoom}
        selectedStationId={selectedStation?.id || null}
        onStationSelect={handleStationSelect}
        isDarkMode={isDarkMode}
      />

      {/* Floating Apple-HIG Glass Controls */}
      <MapFloatingControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onRecenterStadium={handleRecenterStadium}
        currentZoom={currentZoom}
        lang={lang}
      />

      {/* Interactive Bottom Sheet Detail Card */}
      {selectedStation && (
        <StationDetailCard
          station={selectedStation}
          onClose={() => setSelectedStation(null)}
          lang={lang}
          onSetOrigin={onSetOrigin}
          onSetDestination={onSetDestination}
        />
      )}
    </div>
  );
}
