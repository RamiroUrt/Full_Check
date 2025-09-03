'use client'
import '../../../global/pagination.css';
import CardPart from '@/components/ui/CardPart/CardPart';
import React, { useEffect, useState } from 'react';

import { Part } from '@/types/Parts.Types';

import ReactPaginate from 'react-paginate';
const itemsPerPage = 30;

const SectionParts = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [itemOffset, setItemOffset] = useState(0);

useEffect(() => {
  const url = 'http://localhost:3001/parts';
  fetch(url)
    .then(res => res.json())
.then(data => {
        const values: Part[] = Object.values(data);
        setParts(values);
      })
    .catch(err => console.error('Error en fetch:', err));
}, []);

const endOffset = itemOffset + itemsPerPage;
  const currentItems = parts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(parts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % parts.length;
    setItemOffset(newOffset);
  };

  return (
    <section className='section-parts-container'>
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
