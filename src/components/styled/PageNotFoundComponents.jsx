import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  background-color: #0A2B59;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 100vh; /* Fill the entire vertical space */
  justify-content: center;
  margin: 0;
  padding-top:128px;
`
export const Title = styled.h1`
  font-size: 9rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  line-height: 7rem;
  letter-spacing: 4px;
  color: #fff;
`;

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['xxxxl']};
  font-weight: 700;
  margin: 0;
  text-align: center;
  color: #fff;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes['xl']};
  text-align: center;
  color: #d9d9d9;
  flex-wrap: nowrap;
`;