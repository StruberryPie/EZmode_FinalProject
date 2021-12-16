import React from "react";
import styled from "styled-components";

const FancyBorder = () => {
  return <GetFancy />;
};

export default FancyBorder;

const GetFancy = styled.div`
  background-color: lightgrey;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;
