import React from "react";
import { CloseButton, Container, Overlay, Title } from "./styled/PdfsPopupComponents";

const PdfsPopup = ({ title, isOpen, setIsOpen, children }) => {
  const closePopup = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Overlay onClick={closePopup}>
          <Container onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>&times;</CloseButton>
            <Title>{title}</Title>
            {children}
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default PdfsPopup;
