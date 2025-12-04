import Image from "next/image";
import { sliderImages } from "@/constants/sliderImages";

const Slider = () => {
  return (
    <div className="slider-container-component">
      <div className="slider-container">
        {[...sliderImages, ...sliderImages].map((img, index) => (
          <div className="slider-img" key={index}>
            <Image
              src={img}
              loading="lazy"
              alt={`Imagen del slider ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
