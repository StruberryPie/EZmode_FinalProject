import React from "react";
import styled from "styled-components";

const Appearance = () => {
  return (
    <span>
      <BoxTitle>Appearance</BoxTitle>
      <div>
        <div>
          <Identity>Age</Identity>
          <input />
        </div>
        <div>
          <Identity>Height</Identity>
          <input />
        </div>
        <div>
          <Identity>Weight</Identity>
          <input />
        </div>
        <div>
          <Identity>Eyes</Identity>
          <input />
        </div>
        <div>
          <Identity>Skin</Identity>
          <input />
        </div>
        <div>
          <Identity>Hair</Identity>
          <input />
        </div>
      </div>
    </span>
  );
};

export default Appearance;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const Identity = styled.div`
  margin: 5px 0;
`;
