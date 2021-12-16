import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import Loading from "../Loading";
import AbilityScore from "./AbilityScore";

const Abilities = () => {
  const { dndApis, character } = useContext(UserContext);
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
    <span>
      <BoxTitle>Ability Scores</BoxTitle>
      {abilityScores ? (
        abilityScores.map((abilityScore) => {
          return <AbilityScore abilityScore={abilityScore} />;
        })
      ) : (
        <Loading />
      )}
    </span>
  );
};

export default Abilities;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
