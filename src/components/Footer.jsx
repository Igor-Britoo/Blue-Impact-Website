// Footer.js
import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Contacts, Explore, ExploreLink, FooterContainer, FooterSection, IconLink, Section, SocialLinks } from './styled/FooterComponents';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Section>
          <SocialLinks>
            <IconLink href="https://www.linkedin.com/company/green-devs/">
              <FaLinkedin />
            </IconLink>
            <IconLink href="#">
              <FaInstagram />
            </IconLink>
          </SocialLinks>
        </Section>

        <Section>
          <Explore>
            <h4>Explore</h4>
            <ExploreLink href="#">Home</ExploreLink>
            <ExploreLink href="#">Serviços</ExploreLink>
            <ExploreLink href="#">Sobre nós</ExploreLink>
            <ExploreLink href="#">Contato</ExploreLink>
            <ExploreLink href="#">FAQ</ExploreLink>
          </Explore>
        </Section>

        <Section>
          <Contacts>
            <h4>Contacts</h4>
            <a href="tel:+558198128701">+55 (81) 9812-8701</a>
            <a href="mailto:contato@blueimpact.tech">contato@blueimpact.tech</a>
          </Contacts>
        </Section>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;