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
        const res = await fetch('http://localhost:3002/autos');
        const data = await res.json();
        const values: CarUsed[] = Object.values(data);
        setAutos(values);
      } catch (error) {
        console.error('Error al obtener autos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAutos();
  }, []);

  if (loading) return <p>Cargando autos usados...</p>;
  if (!autos.length) return <p>No hay autos disponibles.</p>;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = autos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(autos.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % autos.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="section-used-content">
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
