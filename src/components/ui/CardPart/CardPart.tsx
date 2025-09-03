

import './CardPart.css';
import {cardPartsProps} from '@/types/CardParts.Types';
import Image from 'next/image';

const CardPart = ({title, img, price} : cardPartsProps) => {
  return (
    <div className='card-part-container'>
        <div className="image-card-part">
            <Image src={img} alt={title} width={200} height={200} />
        </div>
        <div className="card-content-part">
        <h1 className='title'>{title}</h1>
            <div className="card-part-description"> 
            </div>
        </div>
          <div className="button-card flex justify-between items-center">
            <button className="button">Detalles</button>
            <p className="price text-lg font-semibold">$ {price.toLocaleString()}</p>
          </div>
    </div>
  )
}

export default CardPart