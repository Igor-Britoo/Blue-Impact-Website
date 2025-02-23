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
            <p>Rua Lorem Ipsum, 37 - Dois Irmãos</p>
            <p>CEP: 53000-195 - Recife - PE</p>
            <ContactInfo>
              <p><img src={mailIcon} alt="Email" /> blueimpactassessoria@gmail.com</p>
              <p><img src={phoneIcon} alt="Phone" /> +55 81 XXXX-XXXX</p>
            </ContactInfo>
          </Address>
        </Section>
        {/* Redes Sociais */}
        <Section>
          <h4>SIGA A BLUE IMPACT</h4>
          <SocialLinks>
            <IconLink href="#"><FaXTwitter /></IconLink>
            <IconLink href="#"><FaInstagram /></IconLink>
            <IconLink href="#"><FaYoutube /></IconLink>
            <IconLink href="#"><FaLinkedin /></IconLink>
          </SocialLinks>
        </Section>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;