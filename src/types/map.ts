export type TransitLineId = 'M1' | 'M2' | 'M3' | 'LRT' | 'MONORAIL_E' | 'MONORAIL_W';

export interface StationNode {
  id: string;
  name_en: string;
  name_ar: string;
  line: TransitLineId;
  x: number;
  y: number;
  is_interchange: boolean;
  connections: TransitLineId[];
  zone?: string;
}

export interface ViewportTransform {
  x: number;
  y: number;
  scale: number;
}

export interface MapViewportProps {
  initialCenter?: { x: number; y: number };
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  onStationSelect?: (station: StationNode) => void;
  selectedStationId?: string | null;
  className?: string;
  isDarkMode?: boolean;
}

export interface StationLabelsLayerProps {
  stations: StationNode[];
  scale: number;
  selectedStationId?: string | null;
  onStationClick: (station: StationNode) => void;
  lang?: 'ar' | 'en';
}

export interface StationDetailCardProps {
  station: StationNode | null;
  onClose: () => void;
  lang?: 'ar' | 'en';
  onSetOrigin?: (stationId: string) => void;
  onSetDestination?: (stationId: string) => void;
}
