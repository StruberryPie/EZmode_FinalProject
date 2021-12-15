import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const HitPoints = () => {
  const { dndApis, character } = useContext(UserContext);
  const [classInfo, setClassInfo] = useState();

  useEffect(() => {
    if (character.class) {
      fetch(
        `https://www.dnd5eapi.co/api/classes/${character.class.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          setClassInfo(data);
        });
    }
  }, [character.class]);

  return (
    <Wrapper>
      <p>Hit Points</p>
      <HitPointsBox>
        <CurrentHitPoints type="text" placeholder="0" />
        <div>
          /
          {classInfo &&
          character.level === 1 &&
          character.ability_modifier.con >= 0
            ? classInfo.hit_die + character.ability_modifier.con
            : classInfo && character.level >= 2
            ? classInfo.hit_die +
              character.ability_modifier.con +
              (classInfo.hit_die / 2 + character.ability_modifier.con) *
                character.level
            : 0}
        </div>
      </HitPointsBox>
    </Wrapper>
  );
};

export default HitPoints;

const Wrapper = styled.div`
  background-color: lightgrey;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  align-items: center;
`;

const HitPointsBox = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentHitPoints = styled.input`
  background-color: lightgrey;
  width: 50px;
  text-align: center;
`;
