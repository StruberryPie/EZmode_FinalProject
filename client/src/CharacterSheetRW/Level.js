import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Level = () => {
  const { character, setCharacter } = useContext(UserContext);

  useEffect(() => {
    if (character.class) {
      fetch(
        `https://www.dnd5eapi.co/api/classes/${character.class.toLowerCase()}/levels`
      )
        .then((res) => res.json())
        .then((data) => {
          setCharacter({ ...character, level_info: data });
        });
    }
  }, [character.class]);

  return (
    <span>
      <BoxTitle>Level</BoxTitle>
      <DisplayedLevel>{character.level}</DisplayedLevel>
    </span>
  );
};

export default Level;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const DisplayedLevel = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1px 2px;
`;
