import styled from 'styled-components';

export const FAQSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  padding: 64px 86px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    padding: 64px 72px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 64px 48px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    padding: 64px 24px;
  }
`

export const FAQTitle = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.75rem;
  text-align: center;
  color: #0A2B59;
  margin-bottom: 49px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    font-size: ${props => props.theme.fontSizes['xxxxxl']};
    line-height: 4rem;
  }
`;

export const FAQContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-content: center;
  max-width: 1100px;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FAQItem = styled.div`
  background-color: #9AB5D9;
  padding: 20px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Question = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  outline: none;
  color: #0A2B59;
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease;
  opacity: 0;

  ${props => props.$isOpen && `
    max-height: fit-content;
    opacity: 1;
    margin-top: 10px;
  `}
`;

export const PlusMinusIcon = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1051AB;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ${props => props.isMinus && `
    color: #9AB5D9;
    font-size: 1.6rem;
    background-color: #1051AB;
    height: 32px;
    width: 32px;
    border-radius: 8px;
  `}
`;