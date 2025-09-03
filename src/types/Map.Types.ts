import { Icon } from 'leaflet';

// Coordenadas geográficas
export interface Coordinates {
  lat: number;
  lng: number;
}

// Una sucursal o locación
export interface BranchLocation {
  name: string;
  coordinates: Coordinates;
  popupText?: string;
  icon?: Icon; 
}
