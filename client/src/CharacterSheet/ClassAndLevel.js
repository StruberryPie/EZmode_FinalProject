import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const ClassAndLevel = () => {
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

  return (
    <>
      <select>
        <option disabled selected>
          Class
        </option>
        {isClasses &&
          isClasses.map((isClass) => {
            return <option>{isClass.name}</option>;
          })}
      </select>
      <input placeholder="level" />
    </>
  );
};

export default ClassAndLevel;
