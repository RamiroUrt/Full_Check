import Hero from '@/components/layout/Hero/Hero'
import Navbar from '@/components/layout/Navbar/Navbar'
import React from 'react'
import Footer from '@/components/layout/Footer/Footer';

import Slider from '@/components/layout/Slider/Slider';
import UsedContent from '@/components/layout/UsedContent/UsedContent';
import Search from '@/components/ui/Search/Search';

import { heroUsedProps } from "@/constants/heroProps";

import { pagesMetadata } from "@/constants/metadata"; 
export const metadata = pagesMetadata.used;


const Used = () => {
  return (
    <>
        <Navbar />
        <Hero 
        CoverHero={heroUsedProps.CoverHero}
        CarAngle={heroUsedProps.CarAngle}
        ColorAngle={heroUsedProps.ColorAngle} />
        <Slider />
        <Search
        placeholder="Busca tu auto favorito por nombre o marca"
        title='Busca tu auto favorito'
        ColorAngle="#2C2C2C" />
        <UsedContent />
        <Footer />
        
    </>
  )
}

export default Used