'use client';
import Logo from '@/assets/img/LogoCom.png';
import './CardComment.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cardComments } from '../../../constants/CardComentsProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CardComment = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      slidesPerView={1}
    >
      {cardComments.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card-comment">
            <div className="card-title-comment">
              <h1 className="title">{card.title}</h1>
            </div>
            <div className="card-content-comment">
              <p className="">{card.feedback}</p>
            </div>
            <p className='card-people'>{card.people}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
            <div className="card-footer-comment">
              <div className="footer-comment-logo-contain">
                <Image src={Logo} alt="Logo" className="footer-logo" />
              </div>
            </div>
    </>
  );
};

export default CardComment;