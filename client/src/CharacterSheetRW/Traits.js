import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Traits = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Traits</BoxTitle>
      {character.race_info ? (
        character.race_info.traits.map((trait) => {
          return <p>- {trait.name}</p>;
        })
      ) : (
        <p>none</p>
      )}
    </span>
  );
};

export default Traits;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
