import React from 'react';
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FooterSection, FooterContainer, Section, SocialLinks, IconLink, Address, ContactInfo, Support } from './styled/FooterComponents.jsx';
import blueImpactLogo from '/hero-logo2.svg';
import ufrpeLogo from '/ufrpe-logo.png';
import mailIcon from '/mail-icon.svg';
import phoneIcon from '/phone-icon.svg';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        {/* Apoio */}
        <Section>
          <Support>
            <h4>APOIO</h4>
            <div className="support-images">
              <img src={blueImpactLogo} alt="Blue Impact" />
              <img src={ufrpeLogo} alt="UFRPE" />
            </div>
          </Support>
        </Section>
        {/* Endereço */}
        <Section>
          <h4>ENDEREÇO</h4>
          <Address>
            <p>DEPAQ/UFRPE - R. Manuel de Medeiros, s/n - Dois Irmãos, Recife - PE</p>
            <p>CEP: 52171-011 - Recife - PE</p>
            <ContactInfo>
              <p><img src={mailIcon} alt="Email" /> blueimpactassessoria@gmail.com</p>
            </ContactInfo>
          </Address>
        </Section>
        {/* Redes Sociais */}
        <Section>
          <h4>SIGA A BLUE IMPACT</h4>
          <SocialLinks>
            <IconLink href="https://www.instagram.com/blueimpact_/"><FaInstagram /></IconLink>
          </SocialLinks>
        </Section>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;