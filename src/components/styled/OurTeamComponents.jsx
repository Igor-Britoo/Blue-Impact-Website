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
  width: 230px;
  height: 350px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 15px;
`;

export const CardName = styled.div`
  width: 220px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;

    a {
      color: #0073b1; /* Default color */
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: inherit; /* Invert to original text color */
      }
    }
  }
`;
