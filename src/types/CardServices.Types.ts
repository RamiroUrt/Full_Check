import { StaticImageData } from "next/image";

export interface CardServicesDetails {
    intro: string;
    features: string[];
}

export interface CardServices {
    image:  string | StaticImageData;
    title: string;
    description: string;
    details: CardServicesDetails; 
}