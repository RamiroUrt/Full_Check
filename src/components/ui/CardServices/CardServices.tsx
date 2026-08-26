'use client';
import React from "react";
import Image from "next/image";
import "./CardServices.css";
import Logo from "../../../assets/img/ContenedorLogo.png";
import type { CardServices } from "@/types/CardServices.Types";
import Modal from "../Modal/Modal";
import "../Modal/Modal.css";
import { useModalOrigin } from "../../../global/hooks/useModalOrigin";

const CardServices: React.FC<CardServices> = ({ title, image, description, details }) => {
  const { isOpen, origin, openModalFrom, closeModal } = useModalOrigin();

  return (
    <>
      <main className="card-services-container">
        <Image src={Logo} alt="Icono" className="logo-image-card" />
        <div className="card-rotate-bg">
          <Image src={image} alt={title} className="bg-image" />
        </div>

        <div className="card-content">
          <h1 className="title">{title}</h1>
          <div className="card-description-services text-secondary">
            <p>{description}</p>
          </div>
        </div>

        <div className="card-footer">
          <button className="button-card" onClick={openModalFrom}>
            <span className="button-text title">DETALLES</span>
          </button>
        </div>
      </main>

      <Modal isOpen={isOpen} origin={origin} onClose={closeModal}>
        <div className="modal modal-services">
          <div className="container-left">
            <div className="modal-img-container-left">
              <Image src={image} alt={title} className="modal-img" />
            </div>
          </div>
          <div className="container-right">
            <section className="section-parts-container dot-group-parts">
              <h2 className="title modal-title">{title}</h2>
              <div className="modal-details-content">
                <p className="modal-intro">{details.intro}</p>
                <ul className="modal-features-list">
                  {details.features.map((feature, index) => (
                    <li
                      key={index}
                      className="modal-feature-item"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardServices;
