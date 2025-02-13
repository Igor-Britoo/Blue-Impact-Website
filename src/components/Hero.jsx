import React, { forwardRef } from 'react'
import { HeroSection, Logo, HeroTitle, HeroSubtitle, LearnMoreButton } from './styled/HeroComponents'
import logo from '/hero-logo.svg'

const Hero = forwardRef(({ faqRef, ...props }, ref) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <HeroSection ref={ref} {...props}>
      <Logo src={logo} alt="Blue Impact Logo" />
      <HeroSubtitle>
        <span>Lorem Ipsum is simply dummy text of the printing and <br/></span>
        typesetting industry. Lorem Ipsum has been the industry's <br/>
        standard dummy text.
      </HeroSubtitle>
      <LearnMoreButton onClick={() => scrollToSection(faqRef)}>
        SAIBA MAIS
      </LearnMoreButton>
    </HeroSection>
  )
})

export default Hero