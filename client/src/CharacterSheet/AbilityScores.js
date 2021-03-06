import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import AbilityModifier from "./AbilityModifier";

const AbilityScores = () => {
  const { dndApis } = useContext(UserContext);
  const [abilityScores, setAbilityScores] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["ability-scores"]}`)
        .then((res) => res.json())
        .then((data) => {
          setAbilityScores(data.results);
        });
    }
  }, [dndApis]);

  return (
    <Wrapper>
      {abilityScores ? (
        abilityScores.map((abilityScore) => {
          return <AbilityModifier abilityScore={abilityScore} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

export default AbilityScores;

const Wrapper = styled.div`
  display: flex;
`;
