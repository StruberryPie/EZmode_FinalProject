import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Loading from "../Loading";

const AbilityScore = ({ abilityScore }) => {
  const { character, setCharacter } = useContext(UserContext);
  const [isAbilityScore, setIsAbilityScore] = useState();
  const [abilityInfo, setAbilityInfo] = useState();
  let isModifier = 0;

  useEffect(() => {
    if (abilityScore) {
      fetch(`https://www.dnd5eapi.co${abilityScore.url}`)
        .then((res) => res.json())
        .then((data) => {
          setAbilityInfo(data);
        });
    }
  }, [abilityScore]);

  useEffect(() => {
    if (abilityInfo) {
      character.ability_info.forEach((ability) => {
        if (ability.index === abilityInfo.index) {
          ability = abilityInfo;
        }
      });
      setCharacter({
        ...character,
        ability_info: [...character.ability_info, abilityInfo],
      });
    }
  }, [abilityInfo]);

  if (isAbilityScore) {
    isModifier = Math.floor((isAbilityScore - 10) / 2);
  }

  return (
    <>
      <p>{abilityInfo ? abilityInfo.name : <Loading />}</p>
      <input
        placeholder="0"
        value={isAbilityScore}
        onChange={(ev) => {
          setIsAbilityScore(ev.target.value);
        }}
        onBlur={(ev) => {
          setCharacter({
            ...character,
            ability_score: {
              ...character.ability_score,
              [abilityInfo.index]: Number(ev.target.value),
            },
            ability_modifier: {
              ...character.ability_modifier,
              [abilityInfo.index]: Number(
                Math.floor((ev.target.value - 10) / 2)
              ),
            },
          });
        }}
      />
      <p>{isModifier}</p>
    </>
  );
};

export default AbilityScore;
