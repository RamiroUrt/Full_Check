
"use client";

import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/Hero/Hero";
import Slider from "@/components/layout/Slider/Slider";
import SelectVehicle from "@/components/layout/SelectVehicle/SelectVehicle";
import Search from "@/components/ui/Search/Search";
import SectionParts from "@/components/layout/SectionParts/SectionParts";
import Footer from "@/components/layout/Footer/Footer";
import { heroShopProps } from "@/constants/heroProps";
import { useState } from "react";

export default function ClientShop() {
     const [filter, setFilter] = useState<string>("all");
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
      <SelectVehicle  setFilter={setFilter}/>
      <Search
        placeholder="Busca tu autoparte por nombre o marca"
        title="Busca tu autoparte"
        ColorAngle="#2C2C2C"
      />
      <SectionParts filter={filter} />
      <Footer />
    </>
  );
}
