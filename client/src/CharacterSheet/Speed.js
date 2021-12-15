import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Speed = () => {
  const { character } = useContext(UserContext);
  const [raceInfo, setRaceInfo] = useState();

  useEffect(() => {
    if (character.race) {
      fetch(`https://www.dnd5eapi.co/api/races/${character.race.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          setRaceInfo(data);
        });
    }
  }, [character.race]);

  return (
    <Wrapper>
      <CharacterSpeed>{raceInfo ? raceInfo.speed : 0}</CharacterSpeed>
      <p>Speed</p>
    </Wrapper>
  );
};

export default Speed;

const Wrapper = styled.div`
  background-color: lightgrey;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  align-items: center;
`;

const CharacterSpeed = styled.div`
  margin-right: 5px;
`;
