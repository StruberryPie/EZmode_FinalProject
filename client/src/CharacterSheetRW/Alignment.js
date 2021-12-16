import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
          setCharacter({ ...character, alignment_info: data });
        });
    }
  }, [character.alignment]);

  return (
    <span>
      <BoxTitle>Alignment</BoxTitle>
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
    </span>
  );
};

export default Alignment;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
