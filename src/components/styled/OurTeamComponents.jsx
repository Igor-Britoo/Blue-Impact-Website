import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px 0;

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 15px;
`;

export const CardName = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;
