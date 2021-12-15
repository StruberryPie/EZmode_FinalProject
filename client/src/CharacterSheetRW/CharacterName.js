import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const CharacterName = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <>
      <p>Character Name</p>
      <input
        placeholder="Character Name"
        onChange={(ev) => {
          setCharacter({ ...character, character_name: ev.target.value });
        }}
      />
    </>
  );
};

export default CharacterName;
