import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { Main } from '../components/styled/HomeComponents';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import MissionAndVision from '../components/MissionAndVision';
import Info from '../components/Info';
import ImageCarousel from '../components/ImageCarousel'; // Import the new component

const Home = () => {
  const homeRef = useRef();
  const contactRef = useRef();
  const faqRef = useRef();

  return (
    <Main>
      <ToastContainer />
      <Header 
        homeRef={homeRef} 
        contactRef={contactRef} 
        faqRef={faqRef} 
      />
      <Hero ref={homeRef} faqRef={faqRef} />
      <MissionAndVision />
      <Info />
      <ImageCarousel /> {/* Add the new component */}
      <ContactForm ref={contactRef} />
      <FAQ ref={faqRef} />
    </Main>
  );
};

export default Home;