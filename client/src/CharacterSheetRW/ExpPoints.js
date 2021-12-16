import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const ExpPoints = () => {
  const { character, setCharacter } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>ExpPoints</BoxTitle>
      <input
        placeholder="EXP Points"
        onChange={(ev) => {
          if (ev.target.value >= 355000) {
            setCharacter({
              ...character,
              level: 20,
              proficiency_bonus: 6,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 305000 && ev.target.value < 355000) {
            setCharacter({
              ...character,
              level: 19,
              proficiency_bonus: 6,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 265000 && ev.target.value < 305000) {
            setCharacter({
              ...character,
              level: 18,
              proficiency_bonus: 6,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 225000 && ev.target.value < 265000) {
            setCharacter({
              ...character,
              level: 17,
              proficiency_bonus: 6,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 195000 && ev.target.value < 225000) {
            setCharacter({
              ...character,
              level: 16,
              proficiency_bonus: 5,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 165000 && ev.target.value < 195000) {
            setCharacter({
              ...character,
              level: 15,
              proficiency_bonus: 5,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 140000 && ev.target.value < 165000) {
            setCharacter({
              ...character,
              level: 14,
              proficiency_bonus: 5,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 120000 && ev.target.value < 140000) {
            setCharacter({
              ...character,
              level: 13,
              proficiency_bonus: 5,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 100000 && ev.target.value < 120000) {
            setCharacter({
              ...character,
              level: 12,
              proficiency_bonus: 4,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 85000 && ev.target.value < 100000) {
            setCharacter({
              ...character,
              level: 11,
              proficiency_bonus: 4,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 64000 && ev.target.value < 85000) {
            setCharacter({
              ...character,
              level: 10,
              proficiency_bonus: 4,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 48000 && ev.target.value < 64000) {
            setCharacter({
              ...character,
              level: 9,
              proficiency_bonus: 4,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 34000 && ev.target.value < 48000) {
            setCharacter({
              ...character,
              level: 8,
              proficiency_bonus: 3,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 23000 && ev.target.value < 34000) {
            setCharacter({
              ...character,
              level: 7,
              proficiency_bonus: 3,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 14000 && ev.target.value < 23000) {
            setCharacter({
              ...character,
              level: 6,
              proficiency_bonus: 3,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 6500 && ev.target.value < 14000) {
            setCharacter({
              ...character,
              level: 5,
              proficiency_bonus: 3,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 2700 && ev.target.value < 6500) {
            setCharacter({
              ...character,
              level: 4,
              proficiency_bonus: 2,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 900 && ev.target.value < 2700) {
            setCharacter({
              ...character,
              level: 3,
              proficiency_bonus: 2,
              exp_points: Number(ev.target.value),
            });
          } else if (ev.target.value >= 300 && ev.target.value < 900) {
            setCharacter({
              ...character,
              level: 2,
              proficiency_bonus: 2,
              exp_points: Number(ev.target.value),
            });
          } else {
            setCharacter({
              ...character,
              level: 1,
              proficiency_bonus: 2,
              exp_points: Number(ev.target.value),
            });
          }
        }}
      />
    </span>
  );
};

export default ExpPoints;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;
