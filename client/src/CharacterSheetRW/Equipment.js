import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Equipment = () => {
  const { character } = useContext(UserContext);

  return (
    <span>
      <BoxTitle>Equipment</BoxTitle>
      <OnPerson>
        <div>
          <CurrencyInfo>
            {/* "copper piece" */}
            <p>
              cp
              <input placeholder="0" />
            </p>
          </CurrencyInfo>
          <CurrencyInfo>
            {/* "silver piece" */}
            <p>
              sp
              <input placeholder="0" />
            </p>
          </CurrencyInfo>
          <CurrencyInfo>
            {/* "electrum piece" */}
            <p>
              ep
              <input placeholder="0" />
            </p>
          </CurrencyInfo>
          <CurrencyInfo>
            {/* "gold piece" */}
            <p>
              gp
              <input placeholder="0" />
            </p>
          </CurrencyInfo>
          <CurrencyInfo>
            {/* "platinum piece" */}
            <p>
              pp
              <input placeholder="0" />
            </p>
          </CurrencyInfo>
        </div>
        <div>
          {character.class_info ? (
            character.class_info.starting_equipment.map((equip) => {
              return (
                <EquipInfo>
                  <EquipName>{equip.equipment.name}</EquipName>
                  <p>{equip.quantity}</p>
                </EquipInfo>
              );
            })
          ) : (
            <p>none</p>
          )}
        </div>
      </OnPerson>
    </span>
  );
};

export default Equipment;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
`;

const OnPerson = styled.div`
  display: flex;
`;

const CurrencyInfo = styled.p`
  margin: 5px 0;
`;

const EquipInfo = styled.div`
  display: flex;
  margin: 5px 0;
`;

const EquipName = styled.p`
  margin: 0 5px;
`;
