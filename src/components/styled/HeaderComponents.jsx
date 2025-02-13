import styled from 'styled-components';

export const HeaderSection = styled.header`
  width: 100%;
  padding: 10px 0px;
  background-color: transparent;
  position: fixed;
  z-index: 9;
  top: 0;
  border-color: #0A2B59;
  transition: background-color 0.3s ease, border-bottom 0.3s ease;
  
  ${props => props.$navbarActive === 'true' && `
    border-bottom: 1px solid #0A2B59;
    background-color: #fff;
  `}
  
  .hamburger-react{
    display: none;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    padding: 20px 0px;
    transition: background-color 0.3s ease, border-bottom 0.3s ease;

    .hamburger-react{
      display: block;
    }

    ${props => props.$mobileMenuOpen === 'true' &&`
      background-color: #fff;
      border-bottom: 1px solid #0A2B59;
    `}
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 16px 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 32px;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  gap: 64px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    display: none;
  }
`

export const NavOption = styled.li`
  font-size: ${props => props.theme.fontSizes['md']};
  font-weight: 700;
  a{
    color: #0A2B59;
    text-decoration: none;
  }
`;

export const HamburgerNav = styled.ul`
  display: none;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 50px 0 20px 0;
    list-style: none;
    gap: 50px;

    ${props => props.open && `
      display: flex;
    `}
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    margin: 0;
    padding: 0;
    justify-content: center;
    height: 100vh;
  }
`