'use client'
import Image from "next/image";

import type { AngleBoxProps } from "@/types/AngleBox.Types";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AngleBox: React.FC<AngleBoxProps> = ({ color, image }) => {
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
  duration: 10, 
  easing: 'ease',
  once: false,
  mirror: true,
  anchorPlacement: 'top-bottom',


});
  }, []);

  return (
    <div
      className="containerBox"
      style={{ backgroundColor: color }}
    >
      <div className="icon ">
        {image && (
          <Image
          data-aos="fade-left"
            data-aos-easing="ease-in-out"
            src={image}
            alt="Icono de ángulo"
            className="icon overlay-content-hero"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default AngleBox;
