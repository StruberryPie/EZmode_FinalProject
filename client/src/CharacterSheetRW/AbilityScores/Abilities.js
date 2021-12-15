import React, { useContext, useEffect, useState } from "react";
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
          console.log(data);
          setAbilityScores(data.results);
        });
    }
  }, [dndApis]);

  return (
    <>
      <p>Ability Scores</p>
      {abilityScores ? (
        abilityScores.map((abilityScore) => {
          return <AbilityScore abilityScore={abilityScore} />;
        })
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Abilities;
