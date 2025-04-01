import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  background-color: #fff;
  gap: 48px;
`

export const Logo = styled.img`
  width: 320px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 280px;
  }
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 600;
  line-height: 7rem;
  text-align: center;
  letter-spacing: 0.1em;
  color: #fff;
  text-shadow: 
    -1px -1px 0 black,  /* Top-left contour */
    1px -1px 0 black,   /* Top-right contour */
    -1px 1px 0 black,   /* Bottom-left contour */
    1px 1px 0 black,    /* Bottom-right contour */
    0px 4px 4px rgba(0, 0, 0, 0.25); /* Original shadow */
  margin-bottom: 10px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}){
    font-size: 5rem;
    line-height: 6rem;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 20px;
  }
`;

export const HeroSubtitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.fontSizes['xxl']};
  font-weight: 600;
  line-height: ${props => props.theme.fontSizes['xxl']};
  text-align: center;
  color: #1C293D;
  max-width: 720px;
  
  span {
    color: #1051AB;
    display: inline-block;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['xl']};
    max-width: 500px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    font-size: ${props => props.theme.fontSizes['xl']};
    max-width: 320px;
  }
`;

export const LearnMoreButton = styled.a`
  padding: 16px 64px;
  background-color: #1051AB;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes['sm']};
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #15407c;
  }
  &:disabled {
    background-color: #0a2d5e;
    cursor: not-allowed;
  }
`;

export const PopupContainer = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 60%;
  max-width: 900px;
  max-height: 80vh;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 80%;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    width: 85%;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    width: 90%;
  }
`;

export const PopupTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #2d3953;
  padding: 24px 32px 0px 32px;
`;

export const PopupTextContainer = styled.div`
  background-size: cover;
  background-position: top;
  padding-top: 40px;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const PopupText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
  text-align: justify;
  padding: 20px 32px;
  height: 60vh;
  max-height: fit-content;
  overflow-y: auto;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;