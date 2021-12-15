import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Initiative = () => {
  const { character } = useContext(UserContext);
  return (
    <>
      {character.ability_modifier.dex ? character.ability_modifier.dex : 0}
      <p>Initiative</p>
    </>
  );
};

export default Initiative;
