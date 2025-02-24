import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselContainer, Card, CardImage } from './styled/OurTeamComponents';

const OurTeam = () => {
  const images = [
    '/images/flavia_card.png',
    '/images/thierry_card.png',
    '/images/anne_card.png',
    '/images/fernanda_card.png',
    '/images/marilia_card.png',
    '/images/andrey_card.png',
    '/images/humber_card.png',
    '/images/lucas_card.png',
    '/images/matheus_card.png',
    '/images/victoria_card.png'
  ];

  return (
    <CarouselContainer>
      <h1>NOSSO TIME</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // Reduce space between cards
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 1 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImage src={image} alt={`Slide ${index + 1}`} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default OurTeam;
