import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Languages = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Languages</p>
      {character.race_info ? (
        character.race_info.languages.map((language) => {
          return <p>- {language.name}</p>;
        })
      ) : (
        <p>- Common</p>
      )}
    </>
  );
};

export default Languages;
