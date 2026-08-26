import { StaticImageData } from "next/image";

export type VehicleFilter = 'all' | 'car' | 'truck' | 'van';

export interface OptionsTypes {
  title: string;
  image: StaticImageData;
  selected?: boolean;
  onClick?: () => void;
  id: VehicleFilter;
}