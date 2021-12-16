import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const Skills = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Skills</BoxTitle>
      <div>
        {character.ability_info ? (
          character.ability_info.map((ability) => {
            return ability.skills.map((skill) => {
              return (
                <SkillMods>
                  <input type="checkbox" />
                  <Modifier>
                    {character.ability_modifier[ability.index]
                      ? character.ability_modifier[ability.index]
                      : 0}
                  </Modifier>
                  <p>{skill.name}</p>
                </SkillMods>
              );
            });
          })
        ) : (
          <Loading />
        )}
      </div>
    </span>
  );
};

export default Skills;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const SkillMods = styled.div`
  display: flex;
  margin: 5px 0;
  text-align: center;
`;

const Modifier = styled.p`
  margin: 0 5px;
`;
