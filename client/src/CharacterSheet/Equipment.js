import React from "react";
import styled from "styled-components";

const Equipment = () => {
  return (
    <Wrapper>
      <div>
        {/* "copper piece" */}
        <p>
          cp
          <Currency placeholder="0" />
        </p>
        {/* "silver piece" */}
        <p>
          sp
          <Currency placeholder="0" />
        </p>
        {/* "electrum piece" */}
        <p>
          ep
          <Currency placeholder="0" />
        </p>
        {/* "gold piece" */}
        <p>
          gp
          <Currency placeholder="0" />
        </p>
        {/* "platinum piece" */}
        <p>
          pp
          <Currency placeholder="0" />
        </p>
      </div>
      <div>
        <p>Equipment</p>
        <EquipmentTextarea />
      </div>
    </Wrapper>
  );
};

export default Equipment;

const Wrapper = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  display: flex;
  align-items: center;
  margin: 5px;
`;

const Currency = styled.input`
  background-color: lightgrey;
  margin: 5px 5px 5px 0;
  max-width: 60px;
  text-align: center;
`;

const EquipmentTextarea = styled.textarea`
  height: 200px;
`;
