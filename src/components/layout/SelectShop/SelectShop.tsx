'use client'
import React, { useEffect, useState } from "react";
import './SelectShop.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Modal from "../../ui/Modal/Modal";
import '../../ui/Modal/Modal.css';
import SectionParts from "../SectionParts/SectionParts";
import { useModalOrigin } from "../../../global/hooks/useModalOrigin";
import { vehicles, VehicleCard } from "../../../types/vehicleTypes";

const SelectShop = () => {
  const { isOpen, origin, openModalFrom, closeModal } = useModalOrigin();
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCard | null>(null);

  useEffect(() => {
    AOS.init({ disable: false, startEvent: 'DOMContentLoaded' });
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>, vehicle: VehicleCard) => {
    setSelectedVehicle(vehicle);
    openModalFrom(e);
  };

  return (
    <>
      <div className='select-shop-container dot-group-parts'>
        <div className="select-vehicle-shop">
          <h2 className='title title-select'>Selecciona tu vehículo</h2>
        </div>

        <div className="select-shop-cars flex">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id ?? index}
              className={`card-shop-car-${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={(e) => handleOpen(e, vehicle)}
              data-aos={vehicle.aos?.animation}
              data-aos-duration={vehicle.aos?.duration}
              data-aos-delay={vehicle.aos?.delay}
            >
              <h1 className='title'>{vehicle.title}</h1>
              <Image
                src={vehicle.image}
                loading="lazy"
                className="cover"
                alt={vehicle.title}
                width={400}
                height={250}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} origin={origin} onClose={closeModal}>
        {selectedVehicle && (
          <div className="modal">
            <div className="container-left">
              <div className="modal-img-container-left">
                <Image
                  src={selectedVehicle.image}
                  alt={selectedVehicle.title}
                  className="modal-img"
                  width={400}
                  height={250}
                />
              </div>
            </div>
            <div className="container-right">
              <h2 className="title modal-title">{selectedVehicle.title}</h2>
              <SectionParts key={selectedVehicle.filter || "all"} filter={selectedVehicle.filter || "all"} />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default SelectShop;
