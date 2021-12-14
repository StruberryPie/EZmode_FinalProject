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
          </TopRow>
          <BottomRow>
            <Race />
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
        <Prificency>
          <PrificencyNumber>prf#</PrificencyNumber>
          <p>prificency bonus</p>
        </Prificency>
        <SavingThrows />
        <Skills />
        <PassivePerception>
          {/* 10 + wisdom */}
          <PassivePerceptionMod>
            {character.ability_modifier.wis && character.ability_modifier.wis}
          </PassivePerceptionMod>
          <p>passive perception</p>
        </PassivePerception>
        <ProficienciesAndLanguages />
      </LeftColumn>
      <CenterColumn>
        <div>
          <div>
            {/* AC = 10 + Dex + armour + Sheild */}
            <p>armor class</p>
            {/* Dex bonus */}
            <Initiative>
              <InitiativeNumber>
                {character.ability_modifier.dex &&
                  character.ability_modifier.dex}
              </InitiativeNumber>
              <p>initiative</p>
            </Initiative>
            <p>speed</p>
          </div>
          <div>
            {/* hit die(class/race) + Con */}
            <p>current hit points</p>
            <p>temporary hit points</p>
          </div>
          <div>
            <p>hit dice</p>
            <DeathSaves />
          </div>
        </div>
        <p>attacks and spellcasting</p>
        <Equipment />
      </CenterColumn>
      <RightColumn>
        <p>features and traits</p>
      </RightColumn>
    </Wrapper>
  );
};

export default MainSheet;

// how to add ame style to mutiple styles?

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopSection = styled.div`
  display: flex;
`;

const CharacterName = styled.input`
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;

const CharacterIdentity = styled.div`
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
  background-color: lightgrey;
  border-radius: 5px;
  padding: 5px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
`;

const Insperation = styled.div`
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
  max-width: 40px;
  text-align: center;
`;

const Prificency = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;

const PrificencyNumber = styled.p`
  margin-right: 10px;
`;

const PassivePerception = styled.div`
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

const LeftColumn = styled.div`
  border: 1px solid red;
`;

const CenterColumn = styled.div`
  border: 1px solid green;
`;

const RightColumn = styled.div`
  border: 1px solid blue;
`;
