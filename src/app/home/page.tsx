import React from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/Hero/Hero";
import Slider from "@/components/layout/Slider/Slider";
import Example from "@/components/layout/Example/Example";
import Services from "@/components/layout/Services/Services";
import Location from "@/components/layout/Location/Location";
import Comments from "@/components/layout/Comments/Comments";
import Footer from "@/components/layout/Footer/Footer";


import { heroHomeProps } from "@/constants/heroProps";

const page = () => {
  return <>
    <Navbar />
    <Hero
      CoverHero={heroHomeProps.CoverHero}
      CarAngle={heroHomeProps.CarAngle}
      ColorAngle={heroHomeProps.ColorAngle} />
    <Slider />
    <Example />
    <Services />
    <Location />
    <Comments />
    <Footer />
  </>;
};

export default page;