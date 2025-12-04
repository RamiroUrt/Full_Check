'use client';
import '../../../global/pagination.css';
import CardUsed from "@/components/ui/CardUsed/CardUsed";
import React, { useEffect, useState } from 'react';
import { CarUsed } from '@/types/CardUsed.Types';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 30;

const UsedContent = () => {
  const [autos, setAutos] = useState<CarUsed[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const fetchAutos = async () => {
      try {
        const res = await fetch('/api/used', { cache: 'no-store' });
        const data = await res.json();

        const values: CarUsed[] = data.autos;

        setAutos(values);
      } catch (error) {
        console.error('Error al obtener autos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAutos();
  }, []);

  if (loading) {
    return (
      <div className="section-used-content h-[100px]">
        <p className='title'>Cargando autos</p>
      </div>
    );
  }

  if (!autos.length) {
    return (
      <div className="section-used-content dot-group-used">
        <p className='title'>No hay autos disponibles</p>
      </div>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = autos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(autos.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % autos.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="section-used-content dot-group-used">
      <h1 className="title used-title">Autos usados</h1>
      <div className="used-container">
        {currentItems.map((auto) => (
          <CardUsed key={auto.id} {...auto} />
        ))}
      </div>

      <ReactPaginate
        breakLabel=".."
        nextLabel="Siguiente >"
        previousLabel="< Anterior"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </section>
  );
};

export default UsedContent;
