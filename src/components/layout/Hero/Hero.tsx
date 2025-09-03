import Image from "next/image";
import AngleBox from "../../ui/AngleBox";
import Logo from "../../../assets/img/Logo.png";
import DotGroup from "../../ui/DotGroup";
import type { HeroProps } from "@/types/Hero.Types";

const Hero = ({ColorAngle, CarAngle, CoverHero}: HeroProps) => {
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