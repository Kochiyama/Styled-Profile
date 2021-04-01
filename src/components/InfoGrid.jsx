import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  margin-bottom: 100px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'top top'
    'bot-left bot-right';
  grid-column-gap: 15px;
  grid-row-gap: 10px;

  @media (max-width: 500px) {
    padding: 3vw;
    margin-bottom: 200px;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'top'
      'bot-left'
      'bot-right';
  }
`;

const GridItem = styled.div`
  padding: 20px;
  grid-area ${(props) => props.gridArea};
  border-radius: 10px;
  background: #1A1F29;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;
  color: #828282;
`;

const Bio = styled.p`
  font-size: 12px;
  color: #fefefc;
`;

const TechList = styled.ul`
  margin-left: 20px;
`;

const Tech = styled.li`
  font-size: 12px;
  color: #fefefc;
`;

const SocialMidiaLink = styled.a`
  font-size: 12px;
  margin-bottom: 5px;
  text-decoration: none;
  color: #2495d4;
`;

const InfoGrid = ({ fullname, bio, instagramLink, linkedinLink, techs }) => {
  return (
    <Grid>
      <GridItem gridArea='top'>
        <ItemTitle>About {fullname.split(' ')[0]}</ItemTitle>
        <Bio>{bio}</Bio>
      </GridItem>

      <GridItem gridArea='bot-left'>
        <ItemTitle>Other Social Midias</ItemTitle>
        <SocialMidiaLink href={instagramLink}>Instagram</SocialMidiaLink>
        <SocialMidiaLink href={linkedinLink}>Linkedin</SocialMidiaLink>
      </GridItem>

      <GridItem gridArea='bot-right'>
        <ItemTitle>Technologies</ItemTitle>
        <TechList>
          {techs.map((tech, index) => {
            return <Tech key={index}>{tech}</Tech>;
          })}
        </TechList>
      </GridItem>
    </Grid>
  );
};

export default InfoGrid;
