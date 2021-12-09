import React from "react";
import styled from "styled-components";
import DescriptionSheet from "./DescriptionSheet";
import MainSheet from "./MainSheet";
import SpellSheet from "./SpellSheet";

const CharacterSheet = () => {
  return (
    <Wrapper>
      <MainSheet />
      <DescriptionSheet />
      <SpellSheet />
    </Wrapper>
  );
};

export default CharacterSheet;

// how to add ame style to mutiple styles?

const Wrapper = styled.div``;

const TopSection = styled.div``;

const LeftColumn = styled.div``;

const AbilityScores = styled.div``;

const CenterColumn = styled.div``;

const RightColumn = styled.div``;
