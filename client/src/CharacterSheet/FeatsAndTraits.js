import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const FeatsAndTraits = () => {
  const { character } = useContext(UserContext);
  const [raceInfo, setRaceInfo] = useState();
  const [classInfo, setClassInfo] = useState();

  useEffect(() => {
    if (character.race) {
      fetch(`https://www.dnd5eapi.co/api/races/${character.race.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRaceInfo(data);
        });
    }
  }, [character.race]);

  useEffect(() => {
    if (character.class) {
      fetch(
        `https://www.dnd5eapi.co/api/classes/${character.class.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRaceInfo(data);
        });
    }
  }, [character.class]);

  return (
    <>
      <div>Feats and Traits</div>
      {}
    </>
  );
};

export default FeatsAndTraits;
