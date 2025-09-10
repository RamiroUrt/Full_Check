import { HeroProps } from "@/types/Hero.Types";
import CarImage from "@/assets/img/car-png/pic2.png";
import CarUsedFont from "@/assets/img/car-png/Chevy-Trax.png";
import CoverHeroImage from '@/assets/img/Hero/heroHome.jpg';
import CoverUsedImage from '@/assets/img/Hero/UsedHero.jpg';
import CarShopImage from '@/assets/img/car-png/Toyota-PNG-Free-Download.png';
import CoverShopImage from '@/assets/img/Hero/ShopHero.jpg';
import CoverBranchImage from '@/assets/img/Hero/BranchHero.jpg';
import VolkswagenGolf from '@/assets/img/car-png/Volkswagen-Golf-GTI-Download-Free-PNG.png';


export const heroHomeProps: HeroProps = {
  ColorAngle: "#2C2C2C",
  CarAngle: CarImage,
  CoverHero: CoverHeroImage
};
export const heroUsedProps: HeroProps = {
  ColorAngle: "#fe7630",
  CarAngle: CarUsedFont,
  CoverHero: CoverUsedImage
};
export const heroShopProps: HeroProps = {
  ColorAngle: "#CCCCCC",
  CarAngle: CarShopImage,
  CoverHero: CoverShopImage
};
export const heroBranchProps: HeroProps = {
  ColorAngle: "#000000",
  CarAngle: VolkswagenGolf,
  CoverHero: CoverBranchImage
};