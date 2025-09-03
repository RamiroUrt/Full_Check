import { StaticImageData } from "next/image";

export interface OptionsTypes {
  title: string;
  image: StaticImageData;
  selected?: boolean;
  onClick?: () => void;
}