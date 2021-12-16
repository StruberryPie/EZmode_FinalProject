import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Insperation = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Insperation</BoxTitle>
      <InspInput
        placeholder="0"
        onChange={(ev) => {
          setCharacter({ ...character, insperation: ev.target.value });
        }}
      />
    </span>
  );
};

export default Insperation;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const InspInput = styled.input`
  text-align: center;
  width: 50px;
`;
