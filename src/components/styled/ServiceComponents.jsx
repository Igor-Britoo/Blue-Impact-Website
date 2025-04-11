import styled from "styled-components";

export const ServiceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1560px;
  background: #ffffff;
  margin-bottom: 30px;
  justify-self: center;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
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
  width: 300px;
  height: 200px;
  margin: 20px; 
  background: #ffffff; 

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    width: 250px;
  }
`;

export const BoxTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #0A2B59;
  margin-bottom: 10px;
  text-align: center;
`;

export const HorizontalLine = styled.div`
  border: 1.5px solid #1051ab;
  margin-bottom: 20px;
`;

export const BoxText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  color: #0A2B59;
`;

