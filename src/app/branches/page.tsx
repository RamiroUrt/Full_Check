
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
          <main className="relative w-[--100vh] h-auto z-[--100] overflow-hidden">
            <Navbar />
            <Hero 
            CoverHero={heroBranchProps.CoverHero}
            CarAngle={heroBranchProps.CarAngle}
            ColorAngle={heroBranchProps.ColorAngle} />
            </main>
            <Slider />

            <BranchSection />
            <Footer />
    </>
  )
}

export default page