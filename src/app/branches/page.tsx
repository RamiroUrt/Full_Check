
import Hero from '@/components/layout/Hero/Hero'
import Navbar from '@/components/layout/Navbar/Navbar'
import Slider from '@/components/layout/Slider/Slider';
import Footer from "@/components/layout/Footer/Footer";
import BranchSection from '@/components/layout/BranchSection/BranchSection';

import { heroBranchProps } from "@/constants/heroProps";
import { pagesMetadata } from "@/constants/metadata"; 
export const metadata = pagesMetadata.branches;

const page = () => {
  return (
    <>
            <Navbar />
            <Hero 
            CoverHero={heroBranchProps.CoverHero}
            CarAngle={heroBranchProps.CarAngle}
            ColorAngle={heroBranchProps.ColorAngle} />
            <Slider />
            <BranchSection />
            <Footer />
    </>
  )
}

export default page