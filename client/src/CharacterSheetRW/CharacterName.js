import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const CharacterName = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Character Name</BoxTitle>
      <input
        placeholder="Character Name"
        onChange={(ev) => {
          setCharacter({ ...character, character_name: ev.target.value });
        }}
      />
    </span>
  );
};

export default CharacterName;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
