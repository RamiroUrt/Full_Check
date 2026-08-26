// src/global/data/vehicles.ts
import { StaticImageData } from 'next/image'
import cars from '../assets/img/ShopCars/cars.jpg'
import trucks from '../assets/img/ShopCars/trucks.png'
import vans from '../assets/img/ShopCars/vans.png'

export type VehicleFilter = 'all' | 'car' | 'truck' | 'van';

export interface VehicleCard {
  id: string
  title: string
  image: StaticImageData | string;
  filter: VehicleFilter
  aos?: {
    animation?: string
    duration?: number
    delay?: number
  }
}

export const vehicles: VehicleCard[] = [
  {
    id: 'car',
    title: 'AUTOS',
    image: cars,
    filter: 'car',
    aos: { animation: 'fade-right', duration: 1000, delay: 200 },
  },
  {
    id: 'van',
    title: 'CAMIONETAS',
    image: vans,
    filter: 'van',
    aos: { animation: 'fade-left', duration: 1000, delay: 200 },
  },
  {
    id: 'truck',
    title: 'CAMIONES',
    image: trucks,
    filter: 'truck',
    aos: { animation: 'fade-right', duration: 1000, delay: 200 },
  },
]
