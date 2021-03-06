import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const Race = () => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [races, setRaces] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["races"]}`)
        .then((res) => res.json())
        .then((data) => {
          setRaces(data.results);
        });
    }
  }, [dndApis]);

  useEffect(() => {
    if (character.race) {
      fetch(`https://www.dnd5eapi.co/api/races/${character.race}`)
        .then((res) => res.json())
        .then((data) => {
          setCharacter({ ...character, race_info: data });
        });
    }
  }, [character.race]);

  return (
    <span>
      <BoxTitle>Race</BoxTitle>
      <select
        onChange={(ev) => {
          setCharacter({ ...character, race: ev.target.value });
        }}
      >
        <option disabled selected>
          Race
        </option>
        {races ? (
          races.map((race) => {
            return <option value={race.index}>{race.name}</option>;
          })
        ) : (
          <option>
            <Loading />
          </option>
        )}
      </select>
    </span>
  );
};

export default Race;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
