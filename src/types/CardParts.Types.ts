import { StaticImageData } from "next/image";

export type PartVehicle = 'car' | 'truck' | 'van';

export interface cardPartsProps {
  title: string;
  car: PartVehicle[];
  img?: StaticImageData | string;
  price: number;
  description?: string;
  modelo?: string;
}