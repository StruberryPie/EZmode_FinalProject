import React, { useContext } from "react";
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
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";

const CharacterSheet = () => {
  const { currentUser, character } = useContext(UserContext);
  console.log(character);

  const initialState = {
    email: "",
    character: [],
  };

  const history = useHistory();

  const submitCharacterFunc = (ev) => {
    ev.preventDefault();

    const data = {
      email: currentUser.email,
      character: character,
    };

    fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          history.push(`/profile/${currentUser._id}`);
        } else {
          alert("information is wrong or missing.");
        }
      });
  };

  return (
    <Wrapper>
      <form onSubmit={submitCharacterFunc}>
        <CharacterSubmit type="submit" value="Create Character" />
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
      </form>
    </Wrapper>
  );
};

export default CharacterSheet;

const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
`;

const CharacterSubmit = styled.input`
  margin: 10px 0 0 10px;
  padding: 10px;
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
