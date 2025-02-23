import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Popup = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
`;

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #9AB5D9;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;