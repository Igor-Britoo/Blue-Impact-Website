import React from "react";
import { Button, CircleCard, CircleText, CircleTitle, IconRow, InfoSection, LeftContainer, RightContainer, SmallCircle, SmallText, Title } from "./styled/InfoComponents";

const Info = () => {
  return (
    <InfoSection>
      <LeftContainer>
        <CircleCard>
          <CircleTitle>SERVIÇOS</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
        </CircleCard>
        <CircleCard>
          <CircleTitle>BLOG</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
        </CircleCard>
        <CircleCard>
          <CircleTitle>PROJETOS</CircleTitle>
          <CircleText>lorem ipsum dolor sit amet consectetur adipiscing elit</CircleText>
        </CircleCard>
      </LeftContainer>
      <RightContainer>
        <Title>PUBLICAÇÕES</Title>
        <IconRow>
          <div>
            <SmallCircle></SmallCircle>
            <SmallText>LOREM</SmallText>
          </div>
          <div>
            <SmallCircle></SmallCircle>
            <SmallText>LOREM</SmallText>
          </div>
          <div>
            <SmallCircle></SmallCircle>
            <SmallText>LOREM</SmallText>
          </div>
        </IconRow>
        <Button>LOREM</Button>
      </RightContainer>
    </InfoSection>
  );
};

export default Info;
