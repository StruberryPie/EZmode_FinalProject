import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Level = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Level</p>
      <p>{character.level}</p>
    </>
  );
};

export default Level;
