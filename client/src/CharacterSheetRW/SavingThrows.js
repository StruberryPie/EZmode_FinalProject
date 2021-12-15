import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const SavingThrows = () => {
  const { character } = useContext(UserContext);

  return (
    <>
      <p>Saving Throws</p>
      <div>
        {character.ability_info ? (
          character.ability_info.map((ability) => {
            return (
              <>
                <input type="checkbox" />
                <p>
                  {character.ability_modifier[ability.index]
                    ? character.ability_modifier[ability.index]
                    : 0}
                </p>
                <p>{ability.full_name}</p>
              </>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default SavingThrows;
