import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.default};
    margin: 0;
    scroll-behavior: smooth;
    height: fit-content;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    min-height: 75vh;
    background-color: #ffffff;
  }
`;

export default GlobalStyles;
