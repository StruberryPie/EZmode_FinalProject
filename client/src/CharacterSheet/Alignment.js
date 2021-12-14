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

  return (
    <>
      <AlignmentSelect
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
      </AlignmentSelect>
    </>
  );
};

export default Alignment;

const AlignmentSelect = styled.select`
  background-color: lightgrey;
  border: none;
`;
