import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const Skills = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Skills</p>
      <div>
        {character.ability_info ? (
          character.ability_info.map((ability) => {
            return ability.skills.map((skill) => {
              return (
                <>
                  <input type="checkbox" />
                  <p>
                    {character.ability_modifier[ability.index]
                      ? character.ability_modifier[ability.index]
                      : 0}
                  </p>
                  <p>{skill.name}</p>
                </>
              );
            });
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Skills;
