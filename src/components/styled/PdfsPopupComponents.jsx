import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 60%;
  max-width: 900px;
  max-height: 80vh;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}){
    width: 80%;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
    width: 85%;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}){
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #2d3953;
  padding: 24px 32px 0px 32px;
`;

export const PdfsContainer = styled.div`
  background-size: cover;
  background-position: top;
  padding-top: 40px;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 350px;
  max-height: 60vh;
  overflow-y: auto;
`;

export const PdfsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
  padding: 20px 32px;
`;

export const Pdf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Icon = styled.img`
  width: 76px;
  height: 54px;
  cursor: pointer;
`;

export const Label = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin-top: 5px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;