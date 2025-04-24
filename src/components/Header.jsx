import logo from '/header-logo.svg'
import { HeaderSection, HeaderContainer, Logo, Nav, NavOption, HamburgerNav } from './styled/HeaderComponents'
import { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

const Header = ({ homeRef, infoRef, ourTeamRef, contactRef  }) => {
  const [navbarActive, setNavbarActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 75) setNavbarActive(true)
    else setNavbarActive(false)
  })

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      if (isOpen) setOpen(false)
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
            <a href="/services">SERVIÇOS</a>
          </NavOption>
          <NavOption>
            <a href="https://tapioca.ird.fr/category/news-events/" target="_blank" rel="noopener noreferrer">BLOG</a>
          </NavOption>
          <NavOption>
            <a href="/projects">PROJETOS</a>
          </NavOption>
          <NavOption>
            <a href="#publications" onClick={() => scrollToSection(infoRef)}>PUBLICAÇÕES</a>
          </NavOption>
          <NavOption>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>CONTATO</a>
          </NavOption>
          <NavOption>
            <a href="#our-team" onClick={() => scrollToSection(ourTeamRef)}>NOSSO TIME</a>
          </NavOption>
        </Nav>

        <Hamburger toggled={isOpen} toggle={setOpen} size={32} direction='left' duration={0.8} distance="lg" color="#0A2B59"  />
      </HeaderContainer>

      <HamburgerNav open={isOpen}>
        <NavOption>
          <a href="#home" onClick={() => scrollToSection(homeRef)}>HOME</a>
        </NavOption>
        <NavOption>
          <a href="/services">SERVIÇOS</a>
        </NavOption>
        <NavOption>
          <a href="https://tapioca.ird.fr/category/news-events/" target="_blank" rel="noopener noreferrer">BLOG</a>
        </NavOption>
        <NavOption>
          <a href="/projects">PROJETOS</a>
        </NavOption>
        <NavOption>
          <a href="#publications" onClick={() => scrollToSection(infoRef)}>PUBLICAÇÕES</a>
        </NavOption>
        <NavOption>
          <a href="#contact" onClick={() => scrollToSection(contactRef)}>CONTATO</a>
        </NavOption>
        <NavOption>
          <a href="#our-team" onClick={() => scrollToSection(ourTeamRef)}>NOSSO TIME</a>
        </NavOption>

      </HamburgerNav>
    </HeaderSection>
  );
};

export default Header;