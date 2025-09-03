import { StaticImageData } from "next/image";

export interface cardPartsProps {
  title: string;
  car: 'car' | 'truck' | 'van';
  img?: StaticImageData | string;
  price: number;
}