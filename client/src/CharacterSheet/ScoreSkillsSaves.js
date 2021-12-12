import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const ScoreSkillsSaves = ({ abilityScore }) => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const { index, name, url } = abilityScore;
  const [skills, setSkills] = useState();
  const [isModifier, setIsModifier] = useState(0);

  useEffect(() => {
    if (url) {
      fetch(`https://www.dnd5eapi.co${url}`)
        .then((res) => res.json())
        .then((data) => {
          setSkills(data);
        });
    }
  }, [url]);

  return (
    <>
      <div>{name}</div>
      <input
        type="text"
        value={isModifier}
        onChange={(ev) => {
          setIsModifier(ev.target.value);
        }}
      />
      <div>{Math.floor((isModifier - 10) / 2)}</div>
    </>
  );
};

export default ScoreSkillsSaves;
