import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

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
          let toModifier;
          // still need to do the math on ability score
          return (
            <>
              <div>{abilityScore.name}</div>
              <input placeholder="0" value={toModifier} />
              <div>0</div>
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
