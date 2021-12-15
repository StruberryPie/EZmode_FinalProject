import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Equipment = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Equipment</p>
      {character.class_info ? (
        character.class_info.starting_equipment.map((equip) => {
          return (
            <>
              <p>{equip.equipment.name}</p>
              <p>{equip.quantity}</p>
            </>
          );
        })
      ) : (
        <p>none</p>
      )}
    </>
  );
};

export default Equipment;
