import React, { useContext } from "react";
import styled from "styled-components";
import Alignment from "./Alignment";
import AbilityScores from "./AbilityScores";
import ClassAndLevel from "./ClassAndLevel";
import Race from "./Race";
import Skills from "./Skills";
import { UserContext } from "../UserContext";
import ExpPoints from "./ExpPoints";
import SavingThrows from "./SavingThrows";
import ProficienciesAndLanguages from "./ProficienciesAndLanguages";
import DeathSaves from "./DeathSaves";
import Equipment from "./Equipment";
import ArmorClass from "./ArmorClass";
import HitPoints from "./HitPoints";
import ProficiencyBonus from "./ProficiencyBonus";
import Speed from "./Speed";
import FeatsAndTraits from "./FeatsAndTraits";

const MainSheet = () => {
  const { currentUser, character, setCharacter } = useContext(UserContext);

  return (
    <Wrapper>
      <div>CharacterSheet</div>
      <TopSection>
        <CharacterName
          type="text"
          placeholder="Character Name"
          onChange={(ev) => {
            setCharacter({ ...character, character_name: ev.target.value });
          }}
        />
        <CharacterIdentity>
          <TopRow>
            <ClassAndLevel />
            {/* unavalible atm */}
            {/* <Background>background</Background> */}
            <PlayerName>{currentUser && currentUser.username}</PlayerName>
            <Race />
          </TopRow>
          <BottomRow>
            <Alignment />
            <ExpPoints />
          </BottomRow>
        </CharacterIdentity>
      </TopSection>
      <LeftColumn>
        {/* ability modifier is ((abilityScore - 10) / 2 and round down ) */}
        <AbilityScores />
        <Insperation>
          <InsperationInput type="text" placeholder="0" />
          <p>Inspiration</p>
        </Insperation>
        {/* +2 for lvl 1 will be in class/race */}
        <ProficiencyBonus />
        <SavingThrows />
        <Skills />
        <PassivePerception>
          {/* 10 + wisdom */}
          <PassivePerceptionMod>
            {character.ability_modifier.wis
              ? 10 + character.ability_modifier.wis
              : 0}
          </PassivePerceptionMod>
          <p>passive perception</p>
        </PassivePerception>
        <ProficienciesAndLanguages />
      </LeftColumn>
      <CenterColumn>
        <div>
          <div>
            {/* AC = 10 + Dex + armour + Sheild */}
            <ArmorClass />
            {/* Dex bonus */}
            <Initiative>
              <InitiativeNumber>
                {character.ability_modifier.dex
                  ? character.ability_modifier.dex
                  : 0}
              </InitiativeNumber>
              <p>initiative</p>
            </Initiative>
            <Speed />
          </div>
          <div>
            {/* hit die(class/race) + Con */}
            <HitPoints />
          </div>
          <div>
            <DeathSaves />
          </div>
        </div>
        {/* <p>attacks and spellcasting</p> */}
        <Equipment />
      </CenterColumn>
      <RightColumn>
        <FeatsAndTraits />
      </RightColumn>
    </Wrapper>
  );
};

export default MainSheet;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopSection = styled.div`
  display: flex;
`;

const CharacterName = styled.input`
  background-color: lightgrey;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;

const CharacterIdentity = styled.div`
  background-color: lightgrey;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Background = styled.p`
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;

const PlayerName = styled.div`
  border-radius: 5px;
  padding: 5px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
`;

const Insperation = styled.div`
  background-color: lightgrey;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;

const InsperationInput = styled.input`
  background-color: lightgrey;
  max-width: 40px;
  text-align: center;
`;

const PassivePerception = styled.div`
  background-color: lightgrey;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;

const PassivePerceptionMod = styled.div`
  margin-right: 10px;
`;

const Initiative = styled.div`
  background-color: lightgrey;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;

const InitiativeNumber = styled.div`
  margin-right: 10px;
`;

const LeftColumn = styled.div``;

const CenterColumn = styled.div``;

const RightColumn = styled.div``;
