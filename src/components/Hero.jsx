import React, { useState, forwardRef } from 'react'
import { HeroSection, Logo, HeroSubtitle, LearnMoreButton, Popup, Card, CardContent } from './styled/HeroComponents'
import logo from '/hero-logo.svg'
import heroCardImage from '/hero_saibamais_card.png'

const Hero = forwardRef(({ faqRef, ...props }, ref) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  return (
    <HeroSection ref={ref} {...props}>
      <Logo src={logo} alt="Blue Impact Logo" />
      <HeroSubtitle>
        <strong>Ciência e Tecnologia para um Oceano Sustentável</strong>
      </HeroSubtitle>
      <LearnMoreButton onClick={togglePopup}>
        SAIBA MAIS
      </LearnMoreButton>
      <Popup className={isPopupOpen ? 'open' : ''} onClick={closePopup}>
        <Card style={{ backgroundImage: `url(${heroCardImage})` }}>
          <CardContent>
            Aqui está o textão do card.
          </CardContent>
        </Card>
      </Popup>
    </HeroSection>
  )
})

export default Hero