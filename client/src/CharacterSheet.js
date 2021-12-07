import React from "react";
import styled from "styled-components";

const CharacterSheet = () => {
  return (
    <Wrapper>
      <div>CharacterSheet</div>
      <MainSheet>
        <TopSection>
          <p>Character name</p>
          <div>
            {/* use api */}
            <p>class and level</p>
            <p>background</p>
            <p>player name</p>
            {/* use api */}
            <p>race</p>
            {/* use api */}
            <p>alignment</p>
            <p>exp points</p>
          </div>
        </TopSection>
        <LeftColumn>
          <AbilityScores>
            {/* can use D&D api to map these */}
            {/* ability modifier is ((abilityScore - 10) / 2 and round down ) */}
            <p>strength</p>
            <p>dexterity</p>
            <p>constitution</p>
            <p>intelligence</p>
            <p>wisdom</p>
            <p>charisma</p>
          </AbilityScores>
          <p>inspiration</p>
          <p>prificency bonus</p>
          <p>saving throws</p>
          <p>skills</p>
          <p>passive perception</p>
          <p>other proficiencies and languages</p>
        </LeftColumn>
        <CenterColumn>
          <div>
            <div>
              <p>armor class</p>
              <p>initiative</p>
              <p>speed</p>
            </div>
            <div>
              <p>current hit points</p>
              <p>temporary hit points</p>
            </div>
            <div>
              <p>hit dice</p>
              <p>death saves</p>
            </div>
          </div>
          <p>attacks and spellcasting</p>
          <div>
            <p>cp "copper piece"</p>
            <p>sp "silver piece"</p>
            <p>ep "electrum piece"</p>
            <p>gp "gold piece"</p>
            <p>pp "platinum piece"</p>
            <p>equipment</p>
          </div>
        </CenterColumn>
        <RightColumn>
          <div>
            <p>personal traits</p>
            <p>ideals</p>
            <p>bonds</p>
            <p>flaws</p>
          </div>
          <p>features and traits</p>
        </RightColumn>
      </MainSheet>
      <FluffSheet></FluffSheet>
      <SpellSheet></SpellSheet>
    </Wrapper>
  );
};

export default CharacterSheet;

const MainSheet = styled.div``;

const Wrapper = styled.div``;

const TopSection = styled.div``;

const LeftColumn = styled.div``;

const AbilityScores = styled.div``;

const CenterColumn = styled.div``;

const RightColumn = styled.div``;

const FluffSheet = styled.div``;

const SpellSheet = styled.div``;
