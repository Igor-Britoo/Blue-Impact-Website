import React, { useState } from 'react';
import logo from '/header-logo.svg';
import { HeaderSection, HeaderContainer, Logo, Nav, NavOption, HamburgerNav } from './styled/HeaderComponents';
import { Fade as Hamburger } from 'hamburger-react';

const StaticHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderSection $navbarActive="true" $mobileMenuOpen={`${isOpen}`}>
      <HeaderContainer>
        <a href="/"> <Logo src={logo} alt="Blue Impact logo" /> </a>

        <Nav>
          <NavOption><a href="/">HOME</a></NavOption>
          <NavOption><a href="/services">SERVIÇOS</a></NavOption>
          <NavOption><a href="https://tapioca.ird.fr/category/news-events/" target="_blank" rel="noopener noreferrer">BLOG</a></NavOption>
          <NavOption><a href="/projects">PROJETOS</a></NavOption>
        </Nav>

        <Hamburger toggled={isOpen} toggle={setOpen} size={32} direction="left" duration={0.8} distance="lg" color="#0A2B59" />
      </HeaderContainer>

      <HamburgerNav open={isOpen}>
        <NavOption><a href="/">HOME</a></NavOption>
        <NavOption><a href="/services">SERVIÇOS</a></NavOption>
        <NavOption><a href="https://tapioca.ird.fr/category/news-events/" target="_blank" rel="noopener noreferrer">BLOG</a></NavOption>
        <NavOption><a href="/projects">PROJETOS</a></NavOption>
      </HamburgerNav>
    </HeaderSection>
  );
};

export default StaticHeader;
