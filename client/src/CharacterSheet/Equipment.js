import React from "react";
import styled from "styled-components";

const Equipment = () => {
  return (
    <>
      <div>
        <p>Equipment</p>
        <textarea />
      </div>
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
    </>
  );
};

export default Equipment;

const Wrapper = styled.div``;

const Currency = styled.input`
max-width:50px
text-align: center;
`;
