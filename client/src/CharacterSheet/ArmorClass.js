import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ArmorClass = () => {
  const { character } = useContext(UserContext);

  return (
    <Wrapper>
      <ArmorClassNumber>
        {character.ability_modifier.dex
          ? 10 + character.ability_modifier.dex
          : 0}
      </ArmorClassNumber>
      <p>armor class</p>
    </Wrapper>
  );
};

export default ArmorClass;

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  align-items: center;
  margin: 5px;
`;

const ArmorClassNumber = styled.div`
  margin-right: 5px;
`;
