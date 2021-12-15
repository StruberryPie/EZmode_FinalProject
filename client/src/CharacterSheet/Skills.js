import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
    <Wrapper>
      <p>Skills</p>
      {skills ? (
        skills.map((skill) => {
          return <Skill skill={skill} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  margin: 5px;
`;
