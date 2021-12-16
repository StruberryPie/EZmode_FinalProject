import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const PassivePerception = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Passive Perception</BoxTitle>
      <DisplayedPerception>
        {character.ability_modifier.wis
          ? 10 + character.ability_modifier.wis
          : 0}
      </DisplayedPerception>
    </span>
  );
};

export default PassivePerception;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedPerception = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
