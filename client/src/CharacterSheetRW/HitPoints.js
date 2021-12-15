import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const HitPoints = () => {
  const { character } = useContext(UserContext);
  const [isHitPoints, setIsHitPoints] = useState();

  return (
    <>
      <p>Hit Points</p>
      <input
        placeholder="0"
        value={isHitPoints}
        onChange={(ev) => {
          setIsHitPoints(ev.target.value);
        }}
      />
      <p>
        /
        {character.class_info &&
        character.level === 1 &&
        character.ability_modifier.con >= 0
          ? character.class_info.hit_die + character.ability_modifier.con
          : character.class_info && character.level >= 2
          ? character.class_info.hit_die +
            character.ability_modifier.con +
            (character.class_info.hit_die / 2 +
              character.ability_modifier.con) *
              character.level
          : 0}
      </p>
    </>
  );
};

export default HitPoints;
