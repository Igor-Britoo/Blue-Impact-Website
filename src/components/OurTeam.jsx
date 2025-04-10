import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselContainer, Card, CardImage, CardName } from './styled/OurTeamComponents';
import { FaLinkedin, FaResearchgate, FaGraduationCap } from 'react-icons/fa'; // Import icons

const OurTeam = forwardRef((props, ref) => {
  const teamMembers = [
    {
      name: 'Flávia Lucena-Frédou',
      image: '/images/flavia_card.png',
      lattes: 'http://lattes.cnpq.br/4779271407117528',
      researchGate: 'https://www.researchgate.net/profile/Flavia-Lucena-Fredou',
      linkedin: 'https://br.linkedin.com/in/fl%C3%A1via-lucena-fr%C3%A9dou-06b5617a',
    },
    {
      name: 'Thierry Frédou',
      image: '/images/thierry_card.png',
      lattes: 'http://lattes.cnpq.br/8119220407894290',
      researchGate: 'https://www.researchgate.net/profile/Thierry-Fredou',
      linkedin: 'https://br.linkedin.com/in/thierry-fredou-9621098b',
    },
    {
      name: 'Humber Agrelli de Andrade',
      image: '/images/humber_card.png',
      lattes: 'http://lattes.cnpq.br/5938373350418153',
      researchGate: 'https://www.researchgate.net/profile/Humber-Andrade',
    },
    {
      name: 'Victoria Judith Isaac Nahum',
      image: '/images/victoria_card.png',
      lattes: 'http://lattes.cnpq.br/3696530797888724',
      researchGate: 'https://www.researchgate.net/profile/Victoria-Isaac-2',
    },
    {
      name: 'Anne Karen da Silva Justino',
      image: '/images/anne_card.png',
      lattes: 'http://lattes.cnpq.br/5522712060565628',
      researchGate: 'https://www.researchgate.net/profile/Anne-K-Justino',
      linkedin: 'https://br.linkedin.com/in/anneksjustino',
    },
    {
      name: 'Andrey Paulo Cavalcanti Soares',
      image: '/images/andrey_card.png',
      lattes: 'http://lattes.cnpq.br/3477624784654670',
      researchGate: 'https://www.researchgate.net/profile/Andrey-Soares-3',
    },
    {
      name: 'Marília Tenório Gouveia de Melo',
      image: '/images/marilia_card.png',
      lattes: 'http://lattes.cnpq.br/2465092101148535',
      researchGate: 'https://www.researchgate.net/profile/Marilia-Tenorio-Gouveia-De-Melo',
      linkedin: 'https://br.linkedin.com/in/mar%C3%ADlia-tg-melo?trk=public_post_feed-actor-name',
    },
    {
      name: 'Lucas Vinícius Santos Silva',
      image: '/images/lucas_card.png',
      lattes: 'http://lattes.cnpq.br/6789012345678901',
      researchGate: 'https://www.researchgate.net/profile/Lucas-Silva-340?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoiX2RpcmVjdCJ9fQ',
    },
    {
      name: 'Maria Fernanda da Silva Morais',
      image: '/images/fernanda_card.png',
      lattes: 'http://lattes.cnpq.br/7105911018918023',
      linkedin: 'https://br.linkedin.com/in/maria-fernanda-da-silva-morais-ab31641b5',
    },
    {
      name: 'Matheus Lourenço Soares da Silva',
      image: '/images/matheus_card.png',
      lattes: 'http://lattes.cnpq.br/4558919744324740',
      researchGate: 'https://www.researchgate.net/profile/Matheus-Silva-172?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwdWJsaWNhdGlvbiIsInByZXZpb3VzUGFnZSI6bnVsbCwic3ViUGFnZSI6bnVsbH19',
    },
  ];

  return (
    <CarouselContainer ref={ref} {...props}>
      <h1>NOSSO TIME</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
          1280: { slidesPerView: 5 },
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImage src={member.image} alt={`Slide ${index + 1}`} />
              <CardName>
                {member.name}
                <div>
                  {member.lattes && (
                    <a href={member.lattes} target="_blank" rel="noopener noreferrer">
                      <FaGraduationCap size={20} />
                    </a>
                  )}
                  {member.researchGate && (
                    <a href={member.researchGate} target="_blank" rel="noopener noreferrer">
                      <FaResearchgate size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </CardName>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
});

export default OurTeam;
