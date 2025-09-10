'use client'
import Image from "next/image";
import AngleBox from "../../ui/AngleBox";
import Logo from "../../../assets/img/Logo.png";
import DotGroup from "../../ui/DotGroup";
import type { HeroProps } from "@/types/Hero.Types";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = ({ColorAngle, CarAngle, CoverHero}: HeroProps) => {

useEffect(() => {
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,
  

  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease',
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',


});
  }, []);

  return (
    <>
        <section className="hero">
            <div className="hero-content">
                <Image
                loading="lazy"
                src={CoverHero}
                alt="Logo"
                className="cover-image"
            />                
                <div className="dot-group-container-hero-up">
                    <DotGroup />
                </div>
                <div className="dot-group-container-hero-down">
                    <DotGroup />
                </div>
                <div className="hero-overlay">
                    <div className="overlay-content">
                        <Image
                        data-aos="zoom-in"
                            src={Logo}
                            alt="Logo"
                            className="overlay-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    <div className="box-contain-hero">
        <AngleBox 
        color={ColorAngle}
        image={CarAngle}/>
    </div>
    </>
  )
}

export default Hero;