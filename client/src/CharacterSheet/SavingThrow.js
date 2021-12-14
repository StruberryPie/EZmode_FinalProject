import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const SavingThrow = ({ saveThrow }) => {
  const { dndApis } = useContext(UserContext);
  const [savingThrow, setSavingThrow] = useState();

  useEffect(() => {
    if (saveThrow) {
      fetch(`https://www.dnd5eapi.co${saveThrow.url}`)
        .then((res) => res.json())
        .then((data) => {
          setSavingThrow(data);
        });
    }
  }, [saveThrow]);

  return (
    <Wrapper>
      <input type="checkbox" />
      <ThrowNumber>mod#</ThrowNumber>
      <div>{savingThrow && savingThrow.full_name}</div>
    </Wrapper>
  );
};

export default SavingThrow;

const Wrapper = styled.div`
  display: flex;
`;

const ThrowNumber = styled.p`
  margin: 0 10px;
`;
