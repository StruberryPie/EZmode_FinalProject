import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const PassivePerception = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>
        {character.ability_modifier.wis
          ? 10 + character.ability_modifier.wis
          : 0}
      </p>
      <p>Passive Perception</p>
    </>
  );
};

export default PassivePerception;
