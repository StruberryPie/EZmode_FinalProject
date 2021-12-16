import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ProficiencyBonus = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Proficiency Bonus</BoxTitle>
      <DisplayedBonus>
        {character.level ? character.proficiency_bonus : 0}
      </DisplayedBonus>
    </span>
  );
};

export default ProficiencyBonus;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedBonus = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
