import React from "react";
import styled from "styled-components";

const Personality = () => {
  return (
    <span>
      <div>
        <BoxTitle>Personality Traits</BoxTitle>
        <TextArea />
      </div>
      <div>
        <BoxTitle>Ideals</BoxTitle>
        <TextArea />
      </div>
      <div>
        <BoxTitle>Bonds</BoxTitle>
        <TextArea />
      </div>
      <div>
        <BoxTitle>Flaws</BoxTitle>
        <TextArea />
      </div>
    </span>
  );
};

export default Personality;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  height: 60px;
`;
