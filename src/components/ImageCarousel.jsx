import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselContainer, Card, CardImage, Popup, PopupImage } from './styled/ImageCarouselComponents';
import fetchData from '../utils/api'

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchData('/images/');
        setImages(data.map(item => item.image));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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
      <Popup $isOpen={isOpen} onClick={handleClose}>
        <PopupImage src={currentImage} alt="Popup" />
      </Popup>
    </CarouselContainer>
  );
};

export default ImageCarousel;
