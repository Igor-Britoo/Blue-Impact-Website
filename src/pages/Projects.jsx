import React, { useEffect, useState } from "react";
import StaticHeader from "../components/StaticHeader";
import Footer from "../components/Footer";
import { ProjectSection, ProjectsContainer, Box, BoxTitle, HorizontalLine, BoxText, Title } from "../components/styled/ProjectsComponents";
import { fetchData } from "../utils/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetchData('/projects/');
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StaticHeader />
      <Title>PROJETOS</Title>
      <ProjectSection>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <Box key={index}>
              <BoxTitle>{project.title}</BoxTitle>
              <HorizontalLine />
              <BoxText>{project.descricao}</BoxText>
            </Box>
          ))}
        </ProjectsContainer>
      </ProjectSection>
      <Footer />
    </>
  );
};

export default Projects;
