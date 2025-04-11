import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Popup = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 15px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 15px;
  &:hover {
    transform: scale(1.05);
  }
`;
