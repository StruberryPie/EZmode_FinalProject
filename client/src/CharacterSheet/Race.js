import React, { useContext, useEffect, useState } from "react";
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
      <select>
        <option disabled selected>
          Race
        </option>
        {races &&
          races.map((race) => {
            return <option>{race.name}</option>;
          })}
      </select>
    </>
  );
};

export default Race;
