import React, { useState, forwardRef } from 'react'
import { HeroSection, Logo, HeroSubtitle, LearnMoreButton, PopupTextContainer, PopupTitle, CloseButton, PopupContainer, PopupOverlay, PopupText } from './styled/HeroComponents'
import logo from '/hero-logo.svg'
import wavesImage from '/waves_saibamais.svg'

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

      {isPopupOpen && (
        <PopupOverlay onClick={closePopup}>
          <PopupContainer>
            <CloseButton onClick={closePopup}>&times;</CloseButton>
            <PopupTitle>BLUE IMPACT</PopupTitle>
            <PopupTextContainer style={{ backgroundImage: `url(${wavesImage})` }}>
              <PopupText>
                A Blue Impact é marcada por uma combinação única de experiência técnica e liderança em modelagem, gestão pesqueira e monitoramento ambiental na região Nordeste do Brasil. Com formação sólida e especializada em métodos avançados de avaliação de estoques pesqueiros e gestão de recursos aquáticos; monitoramento ambiental e educação ambienta, a equipe, multidisciplinar, acumula vasta experiência profissional em pesquisa, gestão e inovação. Membros da equipe vem atuando na área técnica há mais de 20 anos, junto a agências públicas e privadas, nacionais e internacionais, e contam com a colaboração e capacitação contínua de parceiros de várias regiões do Brasil, Estados Unidos e França. A motivação para a criação da Blue Impact veio através da identificação de uma lacuna crítica, principalmente na gestão pesqueira e na região Norte e Nordeste do Brasil, em um mercado dominado pelo eixo Sudeste/Sul, regiões que enfrentam desafios significativos e peculiares na avaliação, manejo e transparência dos dados dos estoques pesqueiros. Nossa startup foi orientada pela necessidade de fornecer soluções práticas e baseadas em evidências para enfrentar esses desafios.
              </PopupText>
            </PopupTextContainer>
          </PopupContainer>
        </PopupOverlay>
      )}
    </HeroSection>
  )
})

export default Hero