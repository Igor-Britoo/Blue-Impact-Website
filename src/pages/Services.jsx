import React, { useEffect } from "react";
import StaticHeader from "../components/StaticHeader";
import Footer from "../components/Footer";
import { ServiceSection, ServicesContainer, Box, BoxTitle, HorizontalLine, BoxText, Title } from "../components/styled/ServiceComponents";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StaticHeader />
      <Title>SERVIÇOS</Title>
      <ServiceSection>
        <ServicesContainer>
          <Box>
            <BoxTitle>ANÁLISE DA OCUPAÇÃO DO SOLO</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Avaliação detalhada do uso e distribuição do solo, identificando áreas urbanizadas, vegetação, corpos d'água e outras classes territoriais para apoiar o planejamento e a gestão sustentável.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>AVALIAÇÃO DE IMPACTOS ANTRÓPICOS</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Análise dos efeitos das atividades humanas sobre o meio ambiente, identificando alterações na paisagem, degradação de ecossistemas e riscos para a sustentabilidade.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>ANÁLISE DE MICRO CONTAMINANTES</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Identificação e avaliação de contaminantes em baixa concentração no solo, na água e no ar, com impacto potencial na saúde humana e no meio ambiente.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>ANÁLISE DE DADOS DE EMBARCAÇÃO</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Processamento e interpretação de informações de navegação, desempenho e comportamento de embarcações para otimização de rotas, segurança e gestão operacional.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>AVALIAÇÃO DE ESTOQUES PESQUEIROS</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Monitoramento e análise da quantidade, distribuição e sustentabilidade das populações de recursos pesqueiros para apoiar a gestão e a conservação dos ecossistemas aquáticos.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>GESTÃO E ORGANIZAÇÃO DE DADOS EM PLANILHA</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Estruturação, tratamento e análise de dados em planilhas para otimizar a visualização, a tomada de decisões e a eficiência operacional.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>GEOPROCESSAMENTO DE INFORMAÇÕES</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Tratamento, análise e representação de dados espaciais para auxiliar no mapeamento, planejamento territorial e tomada de decisões estratégicas.
            </BoxText>
          </Box>
          <Box>
            <BoxTitle>ANÁLISE DE QUALIDADE DA ÁGUA</BoxTitle>
            <HorizontalLine />
            <BoxText>
              Avaliação de parâmetros físicos, químicos e biológicos da água para monitoramento ambiental, gestão de recursos hídricos e garantia da sua adequação para diferentes usos.
            </BoxText>
          </Box>
        </ServicesContainer>
      </ServiceSection>
      <Footer />
    </>
  );
};

export default Services;
