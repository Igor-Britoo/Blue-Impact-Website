import styled from "styled-components";

export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;

  @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 640px;
  box-sizing: border-box;

  @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
    padding: 40px 20px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    width: 100%;
  }
`;

export const CircleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  background: #1051ab;
  border-radius: 50%;
  color: white;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    margin: 0 5px;
  }
`;

export const CircleTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CircleText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
`;

export const RightContainer = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #0a2b59;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 30px;
  margin: 24px 0;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SmallCircle = styled.div`
  width: 112px;
  height: 112px;
  background: #1051ab;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    margin: 0 5px;
  }
`;

export const SmallText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #0a2b59;
  text-align: center;
  margin-top: 5px;
`;

export const Button = styled.button`
  background: #1051ab;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  padding: 8px 32px;
  border: none;
  cursor: pointer;
`;