import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Speed = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      {character.race_info ? character.race_info.speed : 0}
      <p>Speed</p>
    </>
  );
};

export default Speed;
