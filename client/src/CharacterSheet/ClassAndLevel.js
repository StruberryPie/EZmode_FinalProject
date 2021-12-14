import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ClassAndLevel = () => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [isClasses, setIsClasses] = useState();
  const [selectedClass, setSelectedClass] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["classes"]}`)
        .then((res) => res.json())
        .then((data) => {
          setIsClasses(data.results);
        });
    }
  }, [dndApis]);

  return (
    <>
      <ClassSelect
        onChange={(ev) => {
          setCharacter({ ...character, class: ev.target.value });
        }}
      >
        <option disabled selected>
          Class
        </option>
        {isClasses &&
          isClasses.map((isClass) => {
            return <option value={isClasses.index}>{isClass.name}</option>;
          })}
      </ClassSelect>
      <ClassLevel>{character && character.level}</ClassLevel>
    </>
  );
};

export default ClassAndLevel;

const ClassSelect = styled.select`
  background-color: lightgrey;
`;

const ClassLevel = styled.div`
  background-color: lightgrey;
  border-radius: 5px;
  padding: 5px;
`;
