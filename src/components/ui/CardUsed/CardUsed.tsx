import './CardUsed.css';
import Image from 'next/image';
import { CarUsed } from '@/types/CardUsed.Types';

const CardUsed = ({ marca, modelo, año, precio, km, combustible, transmision, imagen }: CarUsed) => {
  return (
    <div className="card-used-container">
        <div className="card-used-image">
          <Image src={imagen} alt={`${marca} ${modelo}`} width={300} height={200} loading="lazy" />
        </div>
      <div className="card-used-border">

        <div className="card-used-content">
        <div className="card-used-background"></div>
          <h1 className="title">{marca}</h1>
          <p className="subtitle title text-3xl">{modelo}</p>

          <div className="description-used text-secondary text-sm space-y-2 mt-4">
            <div className="flex justify-between">
              <span className="parametro">Año:</span>
              <span>{año}</span>
            </div>
            <div className="flex justify-between ">
              <span className="parametro">Kilometraje:</span>
              <span>{km.toLocaleString()} km</span>
            </div>
            <div className="flex justify-between">
              <span className="parametro">Combustible:</span>
              <span>{combustible}</span>
            </div>
            <div className="flex justify-between">
              <span className="parametro">Caja:</span>
              <span>{transmision}</span>
            </div>
          </div>

          <div className="button-card flex justify-between items-center">
            <button className="button btn-primary">Ver más</button>
            <p className="price text-lg font-semibold">$ {precio.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUsed;
