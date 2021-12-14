import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

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

  return (
    <>
      <RaceSelect
        onChange={(ev) => {
          setCharacter({ ...character, race: ev.target.value });
        }}
      >
        <option disabled selected>
          Race
        </option>
        {races &&
          races.map((race) => {
            return <option value={race.index}>{race.name}</option>;
          })}
      </RaceSelect>
    </>
  );
};

export default Race;

const RaceSelect = styled.select`
  background-color: lightgrey;
  border: none;
`;
