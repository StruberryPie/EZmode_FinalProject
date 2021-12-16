import React from "react";
import styled from "styled-components";

const DeathSaves = () => {
  return (
    <span>
      <BoxTitle>Death Saves</BoxTitle>
      <SuccessBox>
        <p>Successes</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </SuccessBox>
      <FailBox>
        <p>Failures</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </FailBox>
    </span>
  );
};

export default DeathSaves;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const SuccessBox = styled.div`
  display: flex;
`;

const FailBox = styled.div`
  display: flex;
`;
