import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import Skill from "./Skill";

const Skills = () => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [skills, setSkills] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["skills"]}`)
        .then((res) => res.json())
        .then((data) => {
          setSkills(data.results);
        });
    }
  }, [dndApis]);

  return (
    <>
      {skills ? (
        skills.map((skill) => {
          return <Skill skill={skill} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Skills;
