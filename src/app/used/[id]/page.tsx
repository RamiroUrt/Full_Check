import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/Hero/Hero";
import Footer from "@/components/layout/Footer/Footer";

import { heroUsedProps } from "@/constants/heroProps";
import used from "@/data/used.json";

import "./page.css";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return used.autos.map((auto) => ({ id: String(auto.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const auto = used.autos.find((a) => String(a.id) === id);

  if (!auto) {
    return { title: "Auto no encontrado | Full Check" };
  }

  return {
    title: `${auto.marca} ${auto.modelo} | Full Check`,
    description: auto.descripcion,
  };
}

const CarDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const auto = used.autos.find((a) => String(a.id) === id);

  if (!auto) notFound();

  return (
    <>
      <main className="relative w-full h-auto z-[100] overflow-hidden">
        <Navbar />
        <Hero
          CoverHero={heroUsedProps.CoverHero}
          CarAngle={heroUsedProps.CarAngle}
          ColorAngle={heroUsedProps.ColorAngle}
        />
      </main>

      <section className="car-detail-section">
        <div className="car-detail-container">
          <div className="car-detail-image">
            <Image
              src={auto.imagen}
              alt={`${auto.marca} ${auto.modelo}`}
              width={600}
              height={400}
              className="car-detail-img"
            />
          </div>

          <div className="car-detail-info">
            <section className="car-detail-content">
              <h1 className="title car-detail-title">
                {auto.marca} {auto.modelo}
              </h1>

              <div className="car-detail-details">
                <p className="car-detail-description">{auto.descripcion}</p>

                <ul className="car-detail-list">
                  <li className="car-detail-item">
                    <span>Año</span>
                    <strong>{auto.año}</strong>
                  </li>
                  <li className="car-detail-item">
                    <span>Kilometraje</span>
                    <strong>{auto.km.toLocaleString()} km</strong>
                  </li>
                  <li className="car-detail-item">
                    <span>Combustible</span>
                    <strong>{auto.combustible}</strong>
                  </li>
                  <li className="car-detail-item">
                    <span>Caja</span>
                    <strong>{auto.transmision}</strong>
                  </li>
                  <li className="car-detail-item">
                    <span>Concesionaria</span>
                    <strong>{auto.ubicacion}</strong>
                  </li>
                  <li className="car-detail-item">
                    <span>Precio</span>
                    <strong>$ {auto.precio.toLocaleString()}</strong>
                  </li>
                </ul>

                <div className="car-detail-actions">
                  <Link href="/used" className="button btn-primary">
                    Volver a usados
                  </Link>
                  <a
                    href={`https://wa.me/5491122334455?text=${encodeURIComponent(
                      `Hola, me interesa el ${auto.marca} ${auto.modelo} ${auto.año} publicado en su página.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button btn-primary car-detail-contact"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CarDetailPage;
