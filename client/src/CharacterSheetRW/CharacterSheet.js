import React from "react";
import Race from "./Race";
import Alignment from "./Alignment";
import CharacterName from "./CharacterName";
import Class from "./Class";
import ExpPoints from "./ExpPoints";
import Level from "./Level";
import Abilities from "./AbilityScores/Abilities";
import PassivePerception from "./PassivePerception";
import Insperation from "./Insperation";
import ProficiencyBonus from "./ProficiencyBonus";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import Languages from "./Languages";
import Proficiencies from "./Proficiencies";
import ArmorClass from "./ArmorClass";
import Initiative from "./Initiative";
import Speed from "./Speed";
import HitPoints from "./HitPoints";
import DeathSaves from "./DeathSaves";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import Equipment from "./Equipment";
import Traits from "./Traits";
import Features from "./Features";
import Personality from "./Personality";
import Appearance from "./Appearance";
import styled from "styled-components";

const CharacterSheet = () => {
  return (
    <Wrapper>
      {/*  */}
      <ColumnFlex>
        <RowFlex>
          <CharacterName />
          <Class />
          <Level />
        </RowFlex>
        <RowFlex>
          <Race />
          <Alignment />
          <ExpPoints />
        </RowFlex>
      </ColumnFlex>
      {/*  */}
      <RowFlex>
        <ColumnFlex>
          <RowFlex>
            <ColumnFlex>
              <Abilities />
            </ColumnFlex>
            <ColumnFlex>
              <Insperation />
              <ProficiencyBonus />
              <SavingThrows />
              <Skills />
            </ColumnFlex>
          </RowFlex>
          <PassivePerception />
          <Languages />
          <Proficiencies />
        </ColumnFlex>
        <ColumnFlex>
          <RowFlex>
            <ArmorClass />
            <Initiative />
            <Speed />
          </RowFlex>
          <RowFlex>
            <HitPoints />
            <DeathSaves />
          </RowFlex>
          {/* <AttacksAndSpellcasting /> */}
          <Equipment />
        </ColumnFlex>
        <ColumnFlex>
          <Personality />
          <Traits />
          {/* <Features /> */}
          <Appearance />
        </ColumnFlex>
      </RowFlex>
    </Wrapper>
  );
};

export default CharacterSheet;

const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
