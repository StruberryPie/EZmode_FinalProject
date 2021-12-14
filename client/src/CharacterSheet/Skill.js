import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Skill = ({ skill }) => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [skillInfo, setSkillInfo] = useState();
  //   console.log(skillInfo);

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
    <>
      <div>{}</div>
      <div>{skillInfo && skillInfo.name}</div>
    </>
  );
};

export default Skill;
