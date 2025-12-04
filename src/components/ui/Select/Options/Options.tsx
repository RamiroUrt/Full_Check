// components/ui/Options/Options.tsx
import Image from 'next/image';
import { OptionsTypes } from '../../../../types/Options.Types';
import '../Select.css';

const Options = ({ title, image, selected, onClick }: OptionsTypes) => {
  return (
    <div
      className={`options-container ${selected ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="options-img">
        <Image src={image} alt={`Imagen de ${title}`} width={50} height={50} loading='lazy' />
      </div>
      <h1 className='title option-title'>{title}</h1>
    </div>
  );
};

export default Options;
