import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

const Features = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <>
      <p>Features</p>
      {/* {character.level_info &&
        character.level_info.map((feature) => {
        })} */}
    </>
  );
};

export default Features;
