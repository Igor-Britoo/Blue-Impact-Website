import React, { forwardRef, useEffect, useState } from "react";
import { Button, CircleCard, CircleText, CircleTitle, IconRow, InfoSection, LeftContainer, RightContainer, SmallCircle, SmallText, Title } from "./styled/InfoComponents";
import fetchData from '../utils/api'
import PdfsPopup from './PdfsPopup'
import academicCapIcon from '/academic_cap.svg'

const Info = forwardRef((props, ref) => {
  const [publications, setPublications] = useState([]);
  const [publicationsPopupIsOpen, setPublicationsPopupIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectsPopupIsOpen, setProjectsPopupIsOpen] = useState(false);

    useEffect(() => {
      const fetchPublications = async () => {
        try {
          const data = await fetchData('/publications/');
          setPublications(data);
        } catch (error) {
          console.error('Error fetching publications:', error);
        }
      };

      const fetchProjects = async () => {
        try {
          const data = await fetchData('/projects/');
          setProjects(data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
      fetchPublications();
      fetchProjects();
    }, []);

  return (
    <InfoSection ref={ref} {...props}>
      <LeftContainer>
        <CircleCard>
          <CircleTitle>SERVIÇOS</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
        </CircleCard>
        <CircleCard>
          <CircleTitle>BLOG</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
        </CircleCard>
        <CircleCard onClick={()=>setProjectsPopupIsOpen(true)}>
          <CircleTitle>PROJETOS</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
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
                onClick={() => window.location.href = publication.file}
              ></SmallCircle>
              <SmallText index={index}>{publication.title.toUpperCase()}</SmallText>
            </div>
          ))}
        </IconRow>
        <Button onClick={()=>setPublicationsPopupIsOpen(true)}>VER MAIS</Button>
      </RightContainer>
      <PdfsPopup title={"PUBLICAÇÕES"} files={publications} isOpen={publicationsPopupIsOpen} setIsOpen={setPublicationsPopupIsOpen} />
      <PdfsPopup title={"PROJETOS"} files={projects} isOpen={projectsPopupIsOpen} setIsOpen={setProjectsPopupIsOpen} />
    </InfoSection>
  );
});

export default Info;
