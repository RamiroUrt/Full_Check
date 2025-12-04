import { StaticImageData } from "next/image";

export interface CardServices {
    image:  string | StaticImageData;
    title: string;
    description: string; 
}