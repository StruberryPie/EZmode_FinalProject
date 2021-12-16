import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Proficiencies = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Proficiencies</BoxTitle>
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
    </span>
  );
};

export default Proficiencies;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
