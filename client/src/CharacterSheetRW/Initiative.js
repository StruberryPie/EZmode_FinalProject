import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Initiative = () => {
  const { character } = useContext(UserContext);
  return (
    <span>
      <BoxTitle>Initiative</BoxTitle>
      <DisplayedInitiative>
        {character.ability_modifier.dex ? character.ability_modifier.dex : 0}
      </DisplayedInitiative>
    </span>
  );
};

export default Initiative;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedInitiative = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
