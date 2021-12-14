import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const AbilityModifier = ({ abilityScore }) => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [skills, setSkills] = useState();
  const [toModifier, setToModifier] = useState(0);
  let isModifier = 0;
  let ability = "";

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
    <Wrapper>
      <AbilityName>{skills && skills.full_name}</AbilityName>
      <AbilityScoreInput
        type="text"
        value={toModifier}
        onChange={(ev) => {
          setToModifier(ev.target.value);
          setCharacter({
            ...character,
            ability_score: {
              ...character.ability_score,
              [ability]: Number(ev.target.value),
            },
            ability_modifier: {
              ...character.ability_modifier,
              [ability]: Number(Math.floor((ev.target.value - 10) / 2)),
            },
          });
        }}
      />
      <AbilityMod>{isModifier}</AbilityMod>
    </Wrapper>
  );
};

export default AbilityModifier;

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const AbilityName = styled.div``;

const AbilityScoreInput = styled.input`
  text-align: center;
  max-width: 100px;
`;

const AbilityMod = styled.div`
  border: 2px solid black;
  padding: 3px 20px;
  border-radius: 50%;
`;
