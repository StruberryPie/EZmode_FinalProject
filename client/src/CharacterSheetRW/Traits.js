import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Traits = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Traits</p>
      {character.race_info ? (
        character.race_info.traits.map((trait) => {
          return <p>- {trait.name}</p>;
        })
      ) : (
        <p>none</p>
      )}
    </>
  );
};

export default Traits;
