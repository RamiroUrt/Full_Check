import { heroShopProps } from "@/constants/heroProps";

import Hero from '@/components/layout/Hero/Hero'
import Navbar from '@/components/layout/Navbar/Navbar'
import Slider from '@/components/layout/Slider/Slider';
import SelectVehicle from "@/components/layout/SelectVehicle/SelectVehicle";
import Search from "@/components/ui/Search/Search";
import SectionParts from "@/components/layout/SectionParts/SectionParts";


import { pagesMetadata } from "@/constants/metadata"; 
import Footer from "@/components/layout/Footer/Footer";
export const metadata = pagesMetadata.shop;


const page = () => {
  return (
    <>
        <Navbar />
        <Hero 
        CoverHero={heroShopProps.CoverHero}
        CarAngle={heroShopProps.CarAngle}
        ColorAngle={heroShopProps.ColorAngle} />
        <Slider />
        <SelectVehicle />
        <Search
        placeholder="Busca tu autoparte por nombre o marca" 
        title="Busca tu autoparte"
        ColorAngle="#2C2C2C" />
        <SectionParts />
        <Footer />
    </>
  )
}

export default page