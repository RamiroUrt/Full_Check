import { StaticImageData } from "next/image";


export interface CardExampleProps {
    service: string;
    description: string;
    ico: StaticImageData | string;
}