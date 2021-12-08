import React from "react";
import styled from "styled-components";

const CharacterSheet = () => {
  return (
    <Wrapper>
      <div>CharacterSheet</div>
      <MainSheet>
        <TopSection>
          <input type="text" placeholder="Character Name" />
          <div>
            {/* use api for class and exp for level*/}
            <p>class and level</p>
            {/* unavalible atm */}
            <p>background</p>
            <input type="text" placeholder="Player Name" />
            {/* use api */}
            <p>race</p>
            {/* use api */}
            <p>alignment</p>
            <input type="text" placeholder="EXP Points" />
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
          {/* +2 for lvl 1 will be in class/race */}
          <p>prificency bonus</p>
          <p>saving throws</p>
          <p>skills</p>
          {/* 10 + perception */}
          <p>passive perception</p>
          <p>other proficiencies and languages</p>
        </LeftColumn>
        <CenterColumn>
          <div>
            <div>
              {/* AC = 10 + Dex + armour + Sheild */}
              <p>armor class</p>
              {/* Dex bonus */}
              <p>initiative</p>
              <p>speed</p>
            </div>
            <div>
              {/* hit die(class/race) + Con */}
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
