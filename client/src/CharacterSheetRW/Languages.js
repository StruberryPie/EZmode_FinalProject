import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Languages = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Languages</BoxTitle>
      {character.race_info ? (
        character.race_info.languages.map((language) => {
          return <p>- {language.name}</p>;
        })
      ) : (
        <p>- Common</p>
      )}
    </span>
  );
};

export default Languages;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
