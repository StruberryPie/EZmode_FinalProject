import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ProficienciesAndLanguages = () => {
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
      <div>
        <p>Languages</p>
        {raceInfo ? (
          raceInfo.languages.map((language) => {
            return <p>- {language.name}</p>;
          })
        ) : (
          <p>- Common</p>
        )}
      </div>
      <div>
        <p>Proficiencies</p>
        {raceInfo ? (
          raceInfo.starting_proficiencies.map((proficiency) => {
            return <p>- {proficiency.name}</p>;
          })
        ) : (
          <p></p>
        )}
      </div>
    </Wrapper>
  );
};

export default ProficienciesAndLanguages;

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;
