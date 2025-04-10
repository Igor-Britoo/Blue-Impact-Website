import React from 'react';
import logo from '/header-logo.svg';
import { HeaderSection, HeaderContainer, Logo, Nav, NavOption } from './styled/HeaderComponents';

const StaticHeader = () => {
  return (
    <HeaderSection $navbarActive="true">
      <HeaderContainer>
        <a href="/"> <Logo src={logo} alt="Blue Impact logo" /> </a>
        <Nav>
          <NavOption><a href="/">HOME</a></NavOption>
          <NavOption><a href="/services">SERVIÇOS</a></NavOption>
          <NavOption><a href="https://tapioca.ird.fr/category/news-events/" target="_blank" rel="noopener noreferrer">BLOG</a></NavOption>
          <NavOption><a href="/projects">PROJETOS</a></NavOption>
        </Nav>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default StaticHeader;
