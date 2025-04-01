import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { Main } from '../components/styled/HomeComponents';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MissionAndVision from '../components/MissionAndVision';
import Info from '../components/Info';
import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import OurTeam from '../components/OurTeam';

const Home = () => {
  const homeRef = useRef();
  const contactRef = useRef();
  const ourTeamRef = useRef();
  const infoRef = useRef();

  return (
    <Main>
      <ToastContainer />
      <Header 
        homeRef={homeRef} 
        contactRef={contactRef} 
        ourTeamRef={ourTeamRef}
        infoRef={infoRef}
      />
      <Hero ref={homeRef}  />
      <MissionAndVision />
      <Info ref={infoRef}/>
      <ImageCarousel />
      <ContactForm ref={contactRef} />
      <OurTeam ref={ourTeamRef} />
      <Footer />
    </Main>
  );
};

export default Home;