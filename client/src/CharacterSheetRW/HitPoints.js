import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const HitPoints = () => {
  const { character } = useContext(UserContext);
  const [isHitPoints, setIsHitPoints] = useState();

  return (
    <span>
      <BoxTitle>Hit Points</BoxTitle>
      <HitPointTracker>
        <HitPointsInput
          placeholder="0"
          value={isHitPoints}
          onChange={(ev) => {
            setIsHitPoints(ev.target.value);
          }}
        />
        <MaxHitPoints>
          /{" "}
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
        </MaxHitPoints>
      </HitPointTracker>
    </span>
  );
};

export default HitPoints;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const HitPointTracker = styled.div`
  display: flex;
`;

const HitPointsInput = styled.input`
  width: 50px;
  text-align: center;
`;

const MaxHitPoints = styled.p``;
