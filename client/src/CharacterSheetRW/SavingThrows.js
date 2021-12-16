import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import Loading from "./Loading";

const SavingThrows = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Saving Throws</BoxTitle>
      <div>
        {character.ability_info ? (
          character.ability_info.map((ability) => {
            return (
              <SavingMods>
                <input type="checkbox" />
                <Modifier>
                  {character.ability_modifier[ability.index]
                    ? character.ability_modifier[ability.index]
                    : 0}
                </Modifier>
                <p>{ability.full_name}</p>
              </SavingMods>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </span>
  );
};

export default SavingThrows;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const SavingMods = styled.div`
  display: flex;
  margin: 5px 0;
  text-align: center;
`;

const Modifier = styled.p`
  margin: 0 5px;
`;
