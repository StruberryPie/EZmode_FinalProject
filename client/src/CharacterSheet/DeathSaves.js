import React from "react";
import styled from "styled-components";

const DeathSaves = () => {
  return (
    <Wrapper>
      <DeathSavesName>DeathSaves</DeathSavesName>
      <BoxedCheckboxes>
        <p>Successes</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </BoxedCheckboxes>
      <BoxedCheckboxes>
        <p>Failures</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </BoxedCheckboxes>
    </Wrapper>
  );
};

export default DeathSaves;

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;

const BoxedCheckboxes = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeathSavesName = styled.p`
  margin-bottom: 5px;
`;
