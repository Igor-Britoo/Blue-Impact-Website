import styled from 'styled-components';

export const FooterSection = styled.section`
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  background-color: #0A2B59;
  color: #FFF;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 150px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    gap: 100px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    flex-direction: column;
    gap: 50px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    margin-bottom: 16px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #6c757d;
  }
`;

export const Explore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExploreLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #6c757d;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
`;