import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Equipment = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Equipment</p>
      <div>
        {/* "copper piece" */}
        <p>
          cp
          <input placeholder="0" />
        </p>
        {/* "silver piece" */}
        <p>
          sp
          <input placeholder="0" />
        </p>
        {/* "electrum piece" */}
        <p>
          ep
          <input placeholder="0" />
        </p>
        {/* "gold piece" */}
        <p>
          gp
          <input placeholder="0" />
        </p>
        {/* "platinum piece" */}
        <p>
          pp
          <input placeholder="0" />
        </p>
      </div>
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
