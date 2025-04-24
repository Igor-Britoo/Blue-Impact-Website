import React from 'react';
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FooterSection, FooterContainer, Section, SocialLinks, IconLink, Address, ContactInfo, Support } from './styled/FooterComponents.jsx';
import blueImpactLogo from '/hero-logo2.svg';
import ufrpeLogo from '/ufrpe-logo.png';
import ufpaLogo from '/ufpa-logo.png';
import irdLogo from '/ird-logo.png';
import tapiocaLogo from '/tapioca-logo.png';
import depaqLogo from '/depaq-logo.png';
import bioImpactLogo from '/bioimpact-logo.png';
import sebraeLogo from '/sebrae-logo.png';
import facepeLogo from '/facepe-logo.png';
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
              <a href="https://www.ufrpe.br" target="_blank" rel="noopener noreferrer">
                <img src={ufrpeLogo} alt="UFRPE" />
              </a>
              <a href="https://www.ufpa.br" target="_blank" rel="noopener noreferrer">
                <img src={ufpaLogo} alt="UFPA" />
              </a>
              <a href="https://www.facepe.br" target="_blank" rel="noopener noreferrer">
                <img src={facepeLogo} alt="FACEPE" />
              </a>
              <a href="https://www.sebrae.com.br" target="_blank" rel="noopener noreferrer">
                <img src={sebraeLogo} alt="SEBRAE" />
              </a>
            </div>
            <div className="support-images">
              <a href="https://www.ird.fr" target="_blank" rel="noopener noreferrer">
                <img src={irdLogo} alt="IRD" />
              </a>
              <a href="https://www.depaq.ufrpe.br" target="_blank" rel="noopener noreferrer">
                <img src={depaqLogo} alt="DEPAQ" />
              </a>
              <a href="https://tapioca.ird.fr/" target="_blank" rel="noopener noreferrer">
                <img src={tapiocaLogo} alt="Tapioca" />
              </a>
              <a href="https://bioimpact.wixsite.com/bioimpact" target="_blank" rel="noopener noreferrer">
                <img src={bioImpactLogo} alt="BioImpact" />
              </a>
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
            <IconLink href="https://www.instagram.com/blueimpact_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </IconLink>
          </SocialLinks>
        </Section>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;