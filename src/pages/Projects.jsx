import React, { useEffect } from "react";
import StaticHeader from "../components/StaticHeader";
import Footer from "../components/Footer";
import { ProjectSection, Box, BoxTitle, HorizontalLine, BoxText, Title } from "../components/styled/ProjectsComponents";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StaticHeader />
      <Title>PROJETOS</Title>
      <ProjectSection>
        <Box>
          <BoxTitle>CAMMARADA</BoxTitle>
          <HorizontalLine />
          <BoxText>
            O CAMMARADA é uma rede colaborativa de pesquisa dedicada a repensar o futuro das pescarias de camarão marinho no Brasil. Atuamos ao longo da costa brasileira com um enfoque integrador entre ciência, tecnologia e saberes locais, propondo soluções práticas para fortalecer a sustentabilidade ecológica, econômica e social da atividade pesqueira. A partir de modelos bioeconômicos, tecnologias inovadoras e estratégias adaptativas frente às mudanças climáticas, buscamos ampliar o diálogo com pescadores, gestores e tomadores de decisão. O objetivo é claro: promover uma pesca mais justa, resiliente e conectada com a conservação da biodiversidade marinha.
          </BoxText>
        </Box>
        <Box>
          <BoxTitle>PROATUM</BoxTitle>
          <HorizontalLine />
          <BoxText>
          O PROATUM articula uma rede nacional e internacional de instituições e pesquisadores voltados à avaliação e ao manejo sustentável dos estoques de atuns no Brasil. Por meio de ferramentas avançadas de modelagem ecossistêmica e de uma abordagem participativa, o projeto contribui para o fortalecimento de políticas públicas fundamentadas em ciência robusta. As ações incluem o monitoramento pesqueiro, avaliação e dos estoques pesqueiros, a capacitação de atores locais e o apoio direto à segurança alimentar de comunidades costeiras que dependem da pesca do atum, promovendo uma governança mais integrada e adaptativa dos recursos marinhos.
          </BoxText>
        </Box>
        <Box>
          <BoxTitle>SUSTENTAMARES</BoxTitle>
          <HorizontalLine />
          <BoxText>
            O SustentaMares reúne instituições do Brasil, Estados Unidos, França e Cabo Verde em uma cooperação internacional para enfrentar os desafios da pesca artesanal diante das mudanças climáticas. A proposta é desenvolver modelos de avaliação de estoques com dados limitados, promovendo intercâmbios científicos, formação de jovens pesquisadores e desenvolvimento de ferramentas para o manejo sustentável e inclusivo dos recursos marinhos. Mais que um projeto, SustentaMares é um espaço de construção coletiva voltado ao fortalecimento do bem-estar socioeconômico e da resiliência das comunidades pesqueiras.
          </BoxText>
        </Box>
      </ProjectSection>
      <Footer />
    </>
  );
};

export default Projects;
