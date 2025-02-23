import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselContainer, Card, CardImage, Popup, PopupImage, GalleryHeading } from './styled/ImageCarouselComponents';

const ImageCarousel = () => {
  const images = [
    '/images/car_img01.jpg',
    '/images/car_img02.jpg',
    '/images/car_img03.jpg',
    '/images/car_img04.jpg',
    '/images/car_img05.jpg',
    '/images/car_img06.jpg'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <CarouselContainer>
      <GalleryHeading>GALERIA</GalleryHeading>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImage src={image} alt={`Slide ${index + 1}`} onClick={() => handleImageClick(image)} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Popup isOpen={isOpen} onClick={handleClose}>
        <PopupImage src={currentImage} alt="Popup" />
      </Popup>
    </CarouselContainer>
  );
};

export default ImageCarousel;
