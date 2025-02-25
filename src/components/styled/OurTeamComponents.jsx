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
  display: flex;
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
    }
`;
