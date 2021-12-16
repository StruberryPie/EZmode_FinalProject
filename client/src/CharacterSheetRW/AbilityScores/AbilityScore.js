import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
    <Wrapper>
      <BoxTitle>{abilityInfo ? abilityInfo.name : <Loading />}</BoxTitle>
      <ScoreInput
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
      <Modifier>{isModifier}</Modifier>
    </Wrapper>
  );
};

export default AbilityScore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px 10px 20px 20px;
  border-style: solid;
  border-color: var(--color-blue-dianne);
  border-width: 3px 1px;
  margin: 5px;
`;

const BoxTitle = styled.h4`
  margin-bottom: 5px;
`;

const ScoreInput = styled.input`
  width: 50px;
  text-align: center;
`;

const Modifier = styled.p`
  margin-top: 3px;
  padding: 2px 14px;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--color-blue-dianne);
  border-width: 1px 2px;
`;
