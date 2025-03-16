import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselContainer, Card, CardImage, CardName } from './styled/OurTeamComponents';

const OurTeam = () => {
  const teamMembers = [
    { name: 'Flavia', image: '/images/flavia_card.png' },
    { name: 'Thierry', image: '/images/thierry_card.png' },
    { name: 'Humberto', image: '/images/humber_card.png' },
    { name: 'Victoria', image: '/images/victoria_card.png' },
    { name: 'Anne', image: '/images/anne_card.png' },
    { name: 'Andrey', image: '/images/andrey_card.png' },
    { name: 'Marilia', image: '/images/marilia_card.png' },
    { name: 'Lucas', image: '/images/lucas_card.png' },
    { name: 'Fernanda', image: '/images/fernanda_card.png' },
    { name: 'Matheus', image: '/images/matheus_card.png' },
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
        loop={false}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 1 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImage src={member.image} alt={`Slide ${index + 1}`} />
              <CardName>{member.name}</CardName>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default OurTeam;
