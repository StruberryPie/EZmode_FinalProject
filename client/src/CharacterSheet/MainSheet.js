import React, { useContext } from "react";
import styled from "styled-components";
import Alignment from "./Alignment";
import AbilityScores from "./AbilityScores";
import ClassAndLevel from "./ClassAndLevel";
import Race from "./Race";
import Skills from "./Skills";
import { UserContext } from "../UserContext";
import ExpPoints from "./ExpPoints";

const MainSheet = () => {
  const { currentUser, character, setCharacter } = useContext(UserContext);

  return (
    <Wrapper>
      <div>CharacterSheet</div>
      <TopSection>
        <input
          type="text"
          placeholder="Character Name"
          onChange={(ev) => {
            setCharacter({ ...character, character_name: ev.target.value });
          }}
        />
        <div>
          {/* exp for level */}
          <ClassAndLevel />
          {/* unavalible atm */}
          <p>background</p>
          <div>{currentUser && currentUser.username}</div>
          <Race />
          <Alignment />
          <ExpPoints />
        </div>
      </TopSection>
      <LeftColumn>
        {/* ability modifier is ((abilityScore - 10) / 2 and round down ) */}
        <AbilityScores />
        <input type="text" placeholder="Inspiration" />
        {/* +2 for lvl 1 will be in class/race */}
        <p>prificency bonus</p>
        <p>saving throws</p>
        <Skills />
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
          <p>
            cp "copper piece"
            <input />
          </p>
          <p>
            sp "silver piece"
            <input />
          </p>
          <p>
            ep "electrum piece"
            <input />
          </p>
          <p>
            gp "gold piece"
            <input />
          </p>
          <p>
            pp "platinum piece"
            <input />
          </p>
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
    </Wrapper>
  );
};

export default MainSheet;

// how to add ame style to mutiple styles?

const Wrapper = styled.div`
  border: 1px solid black;
`;

const TopSection = styled.div`
  border: 1px solid black;
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
