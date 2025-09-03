"use client";
import { useEffect, useRef } from "react";
import DotGroup from '@/components/ui/DotGroup';
import CardsExample from '../../ui/CardExample/CardExample';

const Example = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ✅ Solo habilitar hook si NO es desktop
    const isMobileOrTablet = window.innerWidth < 900; // podés ajustar el breakpoint

    if (!isMobileOrTablet) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY; // mueve scroll horizontal
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="example-container">
      <div className="example-container-img">
        <div className="dot-group-container-example-up">
          <DotGroup />
        </div>
        <div className="example-content">
          <h1 className="example-title title">
            Algunos de nuestros servicios
          </h1>
          <section
            ref={containerRef}
            className="section-container-cards-example"
          >
            <CardsExample />
            <CardsExample />
            <CardsExample />
            <CardsExample />
            <CardsExample />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Example;
