import React from "react";
import { CloseButton, Container, Icon, Label, Overlay, Pdf, PdfsContainer, PdfsGrid, Title } from "./styled/PdfsPopupComponents";
import pdfIcon from "/pdf_icon.svg";
import wavesImage from '/waves_saibamais.svg'

const PdfsPopup = ({ files, isOpen, setIsOpen, title }) => {
  const closePopup = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Overlay onClick={closePopup}>
          <Container>
            <CloseButton onClick={closePopup}>&times;</CloseButton>
            <Title>{title}</Title>
            <PdfsContainer style={{ backgroundImage: `url(${wavesImage})` }}>
              <PdfsGrid >
                {files.map((file, index) => (
                  <Pdf key={index}>
                    <Icon src={pdfIcon} alt="PDF" onClick={() => window.location.href = file.doi}/>
                    <Label>{file.title}</Label>
                  </Pdf>
                ))}
              </PdfsGrid>
            </PdfsContainer>
          </Container>
        </Overlay>
      )}
    </>
  );
};

export default PdfsPopup;
