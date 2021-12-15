import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const ArmorClass = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      {character.ability_modifier.dex || character.ability_modifier.dex >= 0
        ? 10 + character.ability_modifier.dex
        : 0}
      <p>Armor Class</p>
    </>
  );
};

export default ArmorClass;
