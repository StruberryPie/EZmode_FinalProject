import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Proficiencies = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Proficiencies</p>
      {character.class_info ? (
        character.class_info.proficiencies.map((proficiency) => {
          return <p>- {proficiency.name}</p>;
        })
      ) : (
        <p>- none</p>
      )}
      {character.race_info ? (
        character.race_info.starting_proficiencies.map((proficiency) => {
          return <p>- {proficiency.name}</p>;
        })
      ) : (
        <p>- none</p>
      )}
    </>
  );
};

export default Proficiencies;
