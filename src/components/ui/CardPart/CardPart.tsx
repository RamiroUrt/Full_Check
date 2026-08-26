'use client';

import './CardPart.css';
import { cardPartsProps, PartVehicle } from '@/types/CardParts.Types';
import Image, { StaticImageData } from 'next/image';
import Modal from '@/components/ui/Modal/Modal';
import '@/components/ui/Modal/Modal.css';
import { useModalOrigin } from '@/global/hooks/useModalOrigin';

import CarIcon from '../../../../public/svg/options/car-svgrepo-com.svg';
import TruckIcon from '../../../../public/svg/options/truck-svgrepo-com.svg';
import VanIcon from '../../../../public/svg/options/all-terrain-vehicle-svgrepo-com.svg';

const vehicleLabels: Record<PartVehicle, string> = {
  car: 'Autos',
  van: 'Camionetas',
  truck: 'Camiones',
};

const vehicleIcons: Record<PartVehicle, StaticImageData | string> = {
  car: CarIcon,
  van: VanIcon,
  truck: TruckIcon,
};

const CardPart = ({ title, img, price, description, car, modelo }: cardPartsProps) => {
  const { isOpen, origin, openModalFrom, closeModal } = useModalOrigin();

  const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    openModalFrom(e);
  };

  const mainCategory: PartVehicle =
    Array.isArray(car) && car.length > 0 ? car[0] : 'car';

  const compatible = Array.isArray(car)
    ? car.map((c) => vehicleLabels[c] ?? c).join(' · ')
    : '';

  return (
    <>
      <div className="card-part-container">
        <div className="card-part-image">
          <div className="card-part-background"></div>
          {img ? (
            <Image src={img} alt={title} width={300} height={200} loading="lazy" />
          ) : (
            <div className="card-part-placeholder">
              <Image src={vehicleIcons[mainCategory]} alt="Vehículo compatible" width={80} height={80} loading="lazy" />
            </div>
          )}
        </div>

        <div className="card-part-content">
          <h1 className="title">{title}</h1>

          {modelo && (
            <div className="card-part-model text-secondary">
              <span className="parametro">Modelo:</span>
              <span>{modelo}</span>
            </div>
          )}
        </div>

        <div className="button-card-parts flex justify-between items-center">
          <button className="button" onClick={handleOpen}>Detalles</button>
          <p className="price text-lg font-semibold">$ {price.toLocaleString()}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} origin={origin} onClose={closeModal}>
        <div className="modal modal-parts">
          <div className="modal-left">
            {img ? (
              <Image
                src={img}
                alt={title}
                className="modal-part-img"
                width={400}
                height={400}
                loading="lazy"
              />
            ) : (
              <div className="modal-parts-placeholder">
                <Image src={vehicleIcons[mainCategory]} alt="Vehículo compatible" width={120} height={120} loading="lazy" />
              </div>
            )}
          </div>
          <div className="modal-right">
            <section className="section-parts-container dot-group-parts">
              <h2 className="title modal-title">{title}</h2>
              <div className="modal-parts-details-content">
                <p className="modal-parts-description">{description}</p>
                <ul className="modal-parts-list">
                  {modelo && (
                    <li className="modal-parts-item" style={{ animationDelay: '0s' }}>
                      <span>Modelo</span>
                      <strong>{modelo}</strong>
                    </li>
                  )}
                  <li className="modal-parts-item" style={{ animationDelay: '0.08s' }}>
                    <span>Precio</span>
                    <strong>$ {price.toLocaleString()}</strong>
                  </li>
                  {compatible && (
                    <li className="modal-parts-item" style={{ animationDelay: '0.16s' }}>
                      <span>Vehículos</span>
                      <strong>{compatible}</strong>
                    </li>
                  )}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardPart;
