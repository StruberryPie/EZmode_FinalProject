import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import DescriptionSheet from "./DescriptionSheet";
import MainSheet from "./MainSheet";
import SpellSheet from "./SpellSheet";

const CharacterSheet = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <Wrapper>
      <MainSheet />
      <DescriptionSheet />
      <SpellSheet />
    </Wrapper>
  );
};

export default CharacterSheet;

const Wrapper = styled.div``;
