import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Speed = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Speed</BoxTitle>
      <DisplayedSpeed>
        {character.race_info ? character.race_info.speed : 0}
      </DisplayedSpeed>
    </span>
  );
};

export default Speed;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedSpeed = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
