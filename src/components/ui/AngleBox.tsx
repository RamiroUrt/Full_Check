import Image from "next/image";

import type { AngleBoxProps } from "@/types/AngleBox.Types";



const AngleBox: React.FC<AngleBoxProps> = ({ color, image }) => {
  return (
    <div
      className="containerBox"
      style={{ backgroundColor: color }}
    >
      <div className="icon ">
        {image && (
          <Image
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
