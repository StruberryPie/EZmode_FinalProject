import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Insperation = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <>
      <input
        placeholder="0"
        onChange={(ev) => {
          setCharacter({ ...character, insperation: ev.target.value });
        }}
      />
      <p>Insperation</p>
    </>
  );
};

export default Insperation;
