import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import ScoreSkillsSaves from "./ScoreSkillsSaves";

const AbilityScore = () => {
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
    <>
      {abilityScores ? (
        abilityScores.map((abilityScore) => {
          return (
            <>
              <ScoreSkillsSaves abilityScore={abilityScore} />
            </>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AbilityScore;
