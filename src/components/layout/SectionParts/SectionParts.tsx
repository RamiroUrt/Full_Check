'use client';
import '../../../global/pagination.css';
import CardPart from '@/components/ui/CardPart/CardPart';
import React, { useEffect, useState } from 'react';
import { Part } from '@/types/Parts.Types';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 30;

interface Props {
  filter: string;
}

const SectionParts = ({ filter }: Props) => {
  const [parts, setParts] = useState<Part[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const url = '/api/parts';
    fetch(url)
      .then(res => res.json())
      .then(data => {
  // console.log("Datos del backend:", data);
  // const values: Part[] = Object.values(data);
  // console.log("Values después del Object.values:", values);
setParts(data.parts);
      })
      .catch(err => console.error('Error en fetch:', err))
      .finally(() => setLoading(false)); 
  }, []);

  if (loading) {
    return (
      <div className="section-parts-container dot-group-parts">
        <p className="title">Cargando autopartes...</p>
      </div>
    );
  }

  if (!parts.length) {
    return (
      <div className="section-parts-container dot-group-parts">
        <p className="title">No hay autopartes disponibles</p>
      </div>
    );
  }

  const filteredParts =
    filter === "all"
      ? parts
      : parts.filter(part => Array.isArray(part.car) && part.car.includes(filter));

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredParts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredParts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredParts.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="section-parts-container dot-group-parts">
      <div className="cards-container-parts">
        {currentItems.map((part) => (
          <CardPart
            key={part.id}
            title={part.title}
            car={part.car}
            img={part.img}
            price={part.price}
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel=".."
        nextLabel="Siguiente >"
        previousLabel="< Anterior"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </section>
  );
};

export default SectionParts;
