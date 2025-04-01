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
                A Blue Impact combina experiência técnica e liderança na gestão pesqueira no Nordeste do Brasil, com mais de 20 anos de atuação em pesquisa, gestão e inovação. Sua equipe multidisciplinar tem expertise em avaliação de estoques pesqueiros e participou de fóruns nacionais e internacionais, como ICCAT, FAO e MPA.

                A empresa surgiu para suprir uma lacuna na gestão pesqueira no Norte e Nordeste, regiões com desafios específicos e pouco foco do eixo Sul-Sudeste. Com uma abordagem inovadora, está desenvolvendo um laboratório pioneiro e uma plataforma interativa para promover transparência e colaboração na gestão dos recursos pesqueiros.

                Ainda em fase inicial, a Blue Impact busca se tornar referência na avaliação e gestão sustentável da pesca, contribuindo para a conservação dos ecossistemas marinhos e o desenvolvimento sustentável do setor.
              </PopupText>
            </PopupTextContainer>
          </PopupContainer>
        </PopupOverlay>
      )}
    </HeroSection>
  )
})

export default Hero