import React from 'react';
import { Box, BoxText, BoxTitle, HorizontalLine, MissionAndVisionSection } from './styled/MissionAndVisionComponents';

const MissionAndVision = () => {
  return (
    <MissionAndVisionSection>
      <Box>
        <BoxTitle>MISSÃO</BoxTitle>
        <HorizontalLine />
        <BoxText>
          Nosso compromisso é com a gestão ótima dos recursos aquáticos, apoiando tomadores de decisões e empresas a realizarem escolhas assertivas, equilibrando desenvolvimento e preservação ambiental.
        </BoxText>
      </Box>
      <Box>
        <BoxTitle>VISÃO</BoxTitle>
        <HorizontalLine />
        <BoxText>
          A Blue Impact tem como visão se estabelecer como líder na avaliação e gestão sustentável dos recursos pesqueiros, contribuindo para a conservação dos ecossistemas marinhos e o desenvolvimento sustentável do setor pesqueiro.
        </BoxText>
      </Box>
    </MissionAndVisionSection>
  );
};

export default MissionAndVision;