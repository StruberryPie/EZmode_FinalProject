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

  useEffect(() => {
    if (character.alignment) {
      fetch(`https://www.dnd5eapi.co/api/alignments/${character.alignment}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCharacter({ ...character, alignment_info: data });
        });
    }
  }, [character.alignment]);

  return (
    <>
      <div>Alignment</div>
      <select
        onChange={(ev) => {
          setCharacter({ ...character, alignment: ev.target.value });
        }}
      >
        <option disabled selected>
          Alignment
        </option>
        {alignments &&
          alignments.map((alignment) => {
            return <option value={alignment.index}>{alignment.name}</option>;
          })}
      </select>
    </>
  );
};

export default Alignment;