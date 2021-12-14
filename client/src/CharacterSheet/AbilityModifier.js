import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const AbilityModifier = ({ abilityScore }) => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [skills, setSkills] = useState();
  const [toModifier, setToModifier] = useState(0);
  let isModifier = 0;
  let ability = "";
  // console.log(skills);

  useEffect(() => {
    if (abilityScore) {
      fetch(`https://www.dnd5eapi.co${abilityScore.url}`)
        .then((res) => res.json())
        .then((data) => {
          setSkills(data);
        });
    }
  }, [abilityScore]);

  if (toModifier) {
    isModifier = Math.floor((toModifier - 10) / 2);
  }

  if (skills) {
    ability = skills.index;
  }

  return (
    <>
      <div>{skills && skills.full_name}</div>
      <input
        type="text"
        value={toModifier}
        onChange={(ev) => {
          setToModifier(ev.target.value);
          setCharacter({
            ...character,
            ability_score: { [ability]: Number(ev.target.value) },
            ability_modifier: {
              [ability]: Number(Math.floor((ev.target.value - 10) / 2)),
            },
          });
        }}
      />
      <div>{isModifier}</div>
    </>
  );
};

export default AbilityModifier;
