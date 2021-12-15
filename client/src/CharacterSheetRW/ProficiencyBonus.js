import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const ProficiencyBonus = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>{character.level ? character.proficiency_bonus : 0}</p>
      <p>Proficiency Bonus</p>
    </>
  );
};

export default ProficiencyBonus;
