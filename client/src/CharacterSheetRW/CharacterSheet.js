import React from "react";
import Race from "./Race";
import Alignment from "./Alignment";
import CharacterName from "./CharacterName";
import Class from "./Class";
import ExpPoints from "./ExpPoints";
import Level from "./Level";
import Abilities from "./AbilityScores/Abilities";

const CharacterSheet = () => {
  return (
    <>
      <div>
        <b>CharacterSheet</b>
      </div>
      <CharacterName />
      <Class />
      <Level />
      <Race />
      <Alignment />
      <ExpPoints />
      <Abilities />
    </>
  );
};

export default CharacterSheet;
