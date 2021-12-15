import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ProficiencyBonus = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <Wrapper>
      <Proficiency>
        {character.level ? character.proficiency_bonus : 0}
      </Proficiency>
      <p>ProficiencyBonus</p>
    </Wrapper>
  );
};

export default ProficiencyBonus;

const Wrapper = styled.div`
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

const Proficiency = styled.div`
  margin-right: 5px;
`;
