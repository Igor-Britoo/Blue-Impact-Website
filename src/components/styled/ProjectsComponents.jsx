import styled from 'styled-components';

export const ProjectSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1560px;
  background: #ffffff;
  margin-bottom: 30px;
  justify-self: center;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: fit-content;
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #0A2B59;
  text-align: center;
  margin-top: 120px;
  background: #ffffff;
  width: fit-content;
  padding: 10px 20px;
  border: 2px solid #0A2B59;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.5s ease;
  
  &:hover {
    background: #0A2B59;
    color: #ffffff;
  }
`;

export const Box = styled.div`
  width: fit-content;
  padding: 0 50px;
  margin-top: 0px;
  margin-bottom: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    padding: 0;
  }
`;

export const BoxTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #0A2B59;
  margin-bottom: 10px;
`;

export const HorizontalLine = styled.div`
  width: 300px;
  border: 1.5px solid #0A2B59;
  margin-bottom: 20px;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    max-width: 300px;
    width: 80%;
  }
`;

export const BoxText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  color: #0A2B59;
  width: 400px;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    max-width: 400px;
    width: 80%;
  }
`;
