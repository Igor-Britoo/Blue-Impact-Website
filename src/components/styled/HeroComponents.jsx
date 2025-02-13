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

  span {
    color: #1051AB
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}){
    font-size: ${props => props.theme.fontSizes['xxl']};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['xl']};
  }
`;

export const LearnMoreButton = styled.a`
  background: #1051AB;
  padding: 12px 50px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes['sm']};
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #15407c;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['lg']};
    margin-top: 48px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    font-size: ${props => props.theme.fontSizes['md']};
  }
`;