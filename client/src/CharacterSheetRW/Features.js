import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Features = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <>
      <p>Features</p>
    </>
  );
};

export default Features;
