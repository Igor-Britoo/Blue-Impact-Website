import styled from 'styled-components';

export const MissionAndVisionSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #0A2B59;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 640px;
  height: 326px;
  background: #0A2B59;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
    height: 280px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    width: 100%;
  }
`;

export const BoxTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-bottom: 10px;
`;

export const HorizontalLine = styled.div`
  width: 300px;
  border: 1.5px solid #FFFFFF;
  margin-bottom: 20px;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    width: 200px;
  }
`;

export const BoxText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  width: 460px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
  }
`;
