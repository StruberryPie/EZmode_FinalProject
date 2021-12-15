import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import SavingThrow from "./SavingThrow";

const SavingThrows = () => {
  const { dndApis } = useContext(UserContext);
  const [saveThrows, setSaveThrows] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["ability-scores"]}`)
        .then((res) => res.json())
        .then((data) => {
          setSaveThrows(data.results);
        });
    }
  }, [dndApis]);

  return (
    <Wrapper>
      <p>Saving Throws</p>
      {saveThrows ? (
        saveThrows.map((saveThrow) => {
          return <SavingThrow saveThrow={saveThrow} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

export default SavingThrows;

const Wrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;
