import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Level = () => {
  const { character, setCharacter } = useContext(UserContext);
  const [levelInfo, setLevelInfo] = useState();

  useEffect(() => {
    if (character.class) {
      fetch(
        `https://www.dnd5eapi.co/api/classes/${character.class.toLowerCase()}/levels`
      )
        .then((res) => res.json())
        .then((data) => {
          setCharacter({ ...character, level_info: data });
          // setLevelInfo(data);
        });
    }
  }, [character.class]);

  return (
    <>
      <p>Level</p>
      <p>{character.level}</p>
    </>
  );
};

export default Level;
