import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const Class = () => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [isClasses, setIsClasses] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["classes"]}`)
        .then((res) => res.json())
        .then((data) => {
          setIsClasses(data.results);
        });
    }
  }, [dndApis]);

  useEffect(() => {
    if (character.class) {
      fetch(`https://www.dnd5eapi.co/api/classes/${character.class}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCharacter({ ...character, class_info: data });
        });
    }
  }, [character.class]);

  return (
    <span>
      <BoxTitle>Class</BoxTitle>
      <select
        onChange={(ev) => {
          setCharacter({ ...character, class: ev.target.value });
        }}
      >
        <option disabled selected>
          Class
        </option>
        {isClasses ? (
          isClasses.map((isClass) => {
            return <option value={isClass.index}>{isClass.name}</option>;
          })
        ) : (
          <option>
            <Loading />
          </option>
        )}
      </select>
    </span>
  );
};

export default Class;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
