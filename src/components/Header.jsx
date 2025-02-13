import logo from '/header-logo.svg'
import { HeaderSection, HeaderContainer, Logo, Nav, NavOption, HamburgerNav } from './styled/HeaderComponents'
import { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

const Header = ({ homeRef, servicesRef, aboutUsRef, contactRef, faqRef }) => {
  const [navbarActive, setNavbarActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 75) setNavbarActive(true)
    else setNavbarActive(false)
  })

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderSection $navbarActive={`${navbarActive}`} $mobileMenuOpen={`${isOpen}`}>      
      <HeaderContainer>
        <a href="/"> <Logo src={logo} alt="Blue Impact logo" /> </a>

        <Nav>
          <NavOption>
            <a href="#home" onClick={() => scrollToSection(homeRef)}>HOME</a>
          </NavOption>
          <NavOption>
            <a href="#lab" onClick={() => scrollToSection(servicesRef)}>LAB</a>
          </NavOption>
          <NavOption>
            <a href="#services" onClick={() => scrollToSection(servicesRef)}>SERVIÇOS</a>
          </NavOption>
          <NavOption>
            <a href="#blog" onClick={() => scrollToSection(servicesRef)}>BLOG</a>
          </NavOption>
          <NavOption>
            <a href="#publications" onClick={() => scrollToSection(servicesRef)}>PUBLICAÇÕES</a>
          </NavOption>
          <NavOption>
            <a href="#about-us" onClick={() => scrollToSection(aboutUsRef)}>SOBRE NÓS</a>
          </NavOption>
          <NavOption>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>CONTATO</a>
          </NavOption>
          <NavOption>
            <a href="#faq" onClick={() => scrollToSection(faqRef)}>FAQ</a>
          </NavOption>
        </Nav>

        <Hamburger toggled={isOpen} toggle={setOpen} size={32} direction='left' duration={0.8} distance="lg" color="#0A2B59"  />
      </HeaderContainer>

      <HamburgerNav open={isOpen}>
        <NavOption>
          <a href="#home" onClick={() => scrollToSection(homeRef)}>HOME</a>
        </NavOption>
        <NavOption>
          <a href="#lab" onClick={() => scrollToSection(servicesRef)}>LAB</a>
        </NavOption>
        <NavOption>
          <a href="#services" onClick={() => scrollToSection(servicesRef)}>SERVIÇOS</a>
        </NavOption>
        <NavOption>
          <a href="#blog" onClick={() => scrollToSection(servicesRef)}>BLOG</a>
        </NavOption>
        <NavOption>
          <a href="#publications" onClick={() => scrollToSection(servicesRef)}>PUBLICAÇÕES</a>
        </NavOption>
        <NavOption>
          <a href="#about-us" onClick={() => scrollToSection(aboutUsRef)}>SOBRE NÓS</a>
        </NavOption>
        <NavOption>
          <a href="#contact" onClick={() => scrollToSection(contactRef)}>CONTATO</a>
        </NavOption>
        <NavOption>
          <a href="#faq" onClick={() => scrollToSection(faqRef)}>FAQ</a>
        </NavOption>
      </HamburgerNav>
    </HeaderSection>
  );
};

export default Header;