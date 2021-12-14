import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const ExpPoints = () => {
  const { character, setCharacter } = useContext(UserContext);

  const levelCheck = () => {
    if (character.exp_points < 300) {
      setCharacter({ ...character, level: 1 });
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="EXP Points"
        onChange={(ev) => {
          levelCheck();
          setCharacter({
            ...character,
            exp_points: Number(ev.target.value),
          });
        }}
      />
    </>
  );
};

export default ExpPoints;
