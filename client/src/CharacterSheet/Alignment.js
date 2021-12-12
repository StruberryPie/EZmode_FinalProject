import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Alignment = () => {
  const { dndApis, character, setCharacter } = useContext(UserContext);
  const [alignments, setAlignments] = useState();

  useEffect(() => {
    if (dndApis) {
      fetch(`https://www.dnd5eapi.co${dndApis["alignments"]}`)
        .then((res) => res.json())
        .then((data) => {
          setAlignments(data.results);
        });
    }
  }, [dndApis]);

  return (
    <>
      <select>
        <option disabled selected>
          Alignment
        </option>
        {alignments &&
          alignments.map((alignment) => {
            return <option>{alignment.name}</option>;
          })}
      </select>
    </>
  );
};

export default Alignment;
