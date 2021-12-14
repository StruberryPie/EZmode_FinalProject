import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ExpPoints = () => {
  const { character, setCharacter } = useContext(UserContext);

  // const levelCheck = (exp) => {
  //   if (exp >= 300) {
  //     console.log(character.exp_points);
  //     setCharacter({ ...character, level: 2 });
  //   }
  // };

  console.log(character);

  return (
    <>
      <ExpPointsInput
        type="text"
        placeholder="EXP Points"
        onChange={(ev) => {
          console.log(ev.target.value);
          // levelCheck(ev.target.value);
          if (ev.target.value >= 355000) {
            setCharacter({
              ...character,
              level: 20,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 305000 && ev.target.value < 355000) {
            setCharacter({
              ...character,
              level: 19,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 265000 && ev.target.value < 305000) {
            setCharacter({
              ...character,
              level: 18,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 225000 && ev.target.value < 265000) {
            setCharacter({
              ...character,
              level: 17,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 195000 && ev.target.value < 225000) {
            setCharacter({
              ...character,
              level: 16,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 165000 && ev.target.value < 195000) {
            setCharacter({
              ...character,
              level: 15,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 140000 && ev.target.value < 165000) {
            setCharacter({
              ...character,
              level: 14,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 120000 && ev.target.value < 140000) {
            setCharacter({
              ...character,
              level: 13,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 100000 && ev.target.value < 120000) {
            setCharacter({
              ...character,
              level: 12,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 85000 && ev.target.value < 100000) {
            setCharacter({
              ...character,
              level: 11,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 64000 && ev.target.value < 85000) {
            setCharacter({
              ...character,
              level: 10,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 48000 && ev.target.value < 64000) {
            setCharacter({
              ...character,
              level: 9,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 34000 && ev.target.value < 48000) {
            setCharacter({
              ...character,
              level: 8,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 23000 && ev.target.value < 34000) {
            setCharacter({
              ...character,
              level: 7,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 14000 && ev.target.value < 23000) {
            setCharacter({
              ...character,
              level: 6,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 6500 && ev.target.value < 14000) {
            setCharacter({
              ...character,
              level: 5,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 2700 && ev.target.value < 6500) {
            setCharacter({
              ...character,
              level: 4,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 900 && ev.target.value < 2700) {
            setCharacter({
              ...character,
              level: 3,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 300 && ev.target.value < 900) {
            setCharacter({
              ...character,
              level: 2,
              exp_points: Number(ev.target.value),
            });
          } else {
            setCharacter({
              ...character,
              level: 1,
              exp_points: Number(ev.target.value),
            });
          }
          // setCharacter({
          //   ...character,
          //   exp_points: Number(ev.target.value),
          // });
        }}
      />
    </>
  );
};

export default ExpPoints;

const ExpPointsInput = styled.input`
  background-color: lightgrey;
`;
