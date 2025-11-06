'use client';

import './CardPart.css';
import { cardPartsProps } from '@/types/CardParts.Types';
import Image from 'next/image';
import Modal from '@/components/ui/Modal/Modal';
import '@/components/ui/Modal/Modal.css';
import { useModalOrigin } from '@/global/hooks/useModalOrigin';

const CardPart = ({ title, img, price }: cardPartsProps) => {
  const { isOpen, origin, openModalFrom, closeModal } = useModalOrigin();

  const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    openModalFrom(e);
  };

  return (
    <>
      <div className='card-part-container'>
<div className="image-card-part">
              {img &&
    <Image src={img} alt={title} width={200} height={200} loading='lazy'/>
              }
    </div>
        <div className="card-content-part">
          <h1 className='title'>{title}</h1>
        </div>
        <div className="button-card-parts">
          <button className="button" onClick={handleOpen}>Detalles</button>
          <p className="price text-lg font-semibold">$ {price.toLocaleString()}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} origin={origin} onClose={closeModal}>
        <div className="modal modal-part">
          <div className="modal-left">
            {img && (
              <Image
                src={img}
                alt={title}
                className="modal-part-img"
                width={400}
                height={400}
                loading='lazy'
              />
            )}
          </div>
          <div className="modal-right">
            <p className="modal-description mt-2 text-sm text-gray-600">
              Aquí podés agregar una breve descripción del repuesto o pieza, sus
              características técnicas o compatibilidad con vehículos.
            </p>
            <h2 className="title modal-title">{title}</h2>
            <p className="modal-price">
              Precio: $ {price.toLocaleString()}
            </p>
            <button className="button mt-4" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardPart;
