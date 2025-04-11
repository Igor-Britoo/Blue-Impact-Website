import React, { forwardRef, useEffect, useState } from "react";
import { fetchData } from '../utils/api';
import PdfsPopup from './PdfsPopup';
import academicCapIcon from '/academic_cap.svg';
import { useNavigate } from "react-router-dom";

import {
  Button,
  CircleCard,
  CircleTitle,
  IconRow,
  InfoSection,
  LeftContainer,
  RightContainer,
  SmallCircle,
  SmallText,
  Title,
} from "./styled/InfoComponents";

const Info = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const [publicationsPopupIsOpen, setPublicationsPopupIsOpen] = useState(false);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await fetchData('/publications/');
        setPublications(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <>
      <InfoSection ref={ref} {...props}>
        <LeftContainer>
          <CircleCard onClick={() => navigate("/services")}>
            <CircleTitle>SERVIÇOS</CircleTitle>
          </CircleCard>
          <CircleCard onClick={() => window.open('https://tapioca.ird.fr/category/news-events/', '_blank')}>
            <CircleTitle>BLOG</CircleTitle>
          </CircleCard>
          <CircleCard onClick={() => navigate("/projects")}>
            <CircleTitle>PROJETOS</CircleTitle>
          </CircleCard>
        </LeftContainer>
        <RightContainer>
          <Title>PUBLICAÇÕES</Title>
          <IconRow>
            {publications.slice(0, 3).map((publication, index) => (
              <div key={index}>
                <SmallCircle 
                  index={index} 
                  style={{ backgroundImage: `url(${academicCapIcon})` }}
                  onClick={() => window.open(publication.doi, '_blank')}
                ></SmallCircle>
                <SmallText index={index}>{publication.title.toUpperCase()}</SmallText>
              </div>
            ))}
          </IconRow>
          <Button onClick={() => setPublicationsPopupIsOpen(true)}>VER MAIS</Button>
        </RightContainer>
        <PdfsPopup title={"PUBLICAÇÕES"} files={publications} isOpen={publicationsPopupIsOpen} setIsOpen={setPublicationsPopupIsOpen} />
      </InfoSection>
     </>
  );
});

export default Info;
