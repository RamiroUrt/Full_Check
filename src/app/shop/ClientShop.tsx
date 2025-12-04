'use client'

import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/Hero/Hero";
import Slider from "@/components/layout/Slider/Slider";
import Footer from "@/components/layout/Footer/Footer";
import { heroShopProps } from "@/constants/heroProps";
import SelectShop from "@/components/layout/SelectShop/SelectShop";

export default function ClientShop() {
  return (
    <>
      <main className="relative w-[--100vh] h-auto z-[--100] overflow-hidden">
        <Navbar />
        <Hero
          CoverHero={heroShopProps.CoverHero}
          CarAngle={heroShopProps.CarAngle}
          ColorAngle={heroShopProps.ColorAngle}
        />
      </main>
      <Slider />
      <SelectShop />
      <Footer />
    </>
  );
}
