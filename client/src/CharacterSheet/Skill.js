import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Skill = ({ skill }) => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [skillInfo, setSkillInfo] = useState();

  useEffect(() => {
    if (skill) {
      fetch(`https://www.dnd5eapi.co${skill.url}`)
        .then((res) => res.json())
        .then((data) => {
          setSkillInfo(data);
        });
    }
  }, [skill]);

  return (
    <Wrapper>
      <Proficient type="checkbox" />
      <ModifierNumber>mod#</ModifierNumber>
      <SkillName>{skillInfo && skillInfo.name}</SkillName>
    </Wrapper>
  );
};

export default Skill;

const Wrapper = styled.div`
  display: flex;
`;

const Proficient = styled.input``;

const ModifierNumber = styled.div`
  margin: 0 10px;
`;

const SkillName = styled.div``;
