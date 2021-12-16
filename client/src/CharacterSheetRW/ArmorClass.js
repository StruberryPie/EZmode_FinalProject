import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ArmorClass = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Armor Class</BoxTitle>
      <DisplayedArmor>
        {character.ability_modifier.dex || character.ability_modifier.dex >= 0
          ? 10 + character.ability_modifier.dex
          : 0}
      </DisplayedArmor>
    </span>
  );
};

export default ArmorClass;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedArmor = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
