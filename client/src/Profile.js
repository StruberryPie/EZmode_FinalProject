import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CharacterSheet from "./CharacterSheetRW/CharacterSheet";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  const history = useHistory();

  const createCharacterFunc = () => {
    history.push("/character-create");
  };

  return (
    <>
      <CharCardFlexBox>
        <CharCard onClick={createCharacterFunc}>
          <CharAddOne />
          <CharAddTwo />
        </CharCard>
        {/* <CharCard></CharCard> */}
      </CharCardFlexBox>
      {/* <div>start lobby</div> */}
    </>
  );
};

export default Profile;

const CharCardFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharCard = styled.button`
  margin: 20px;
  background-color: var(--color-soft-amber);
  border-radius: 10px;
  box-shadow: 0 8px 8px -4px rgb(0 0 0 / 0.5);
  width: 250px;
  height: 350px;
  position: relative;
`;

const CharAddOne = styled.div`
  left: 50px;
  top: 160px;
  width: 150px;
  height: 30px;
  background-color: var(--color-cinnabar);
  border-radius: 5px;
  position: absolute;
`;

const CharAddTwo = styled.div`
  top: 100px;
  left: 110px;
  width: 30px;
  height: 150px;
  background-color: var(--color-cinnabar);
  border-radius: 5px;
  position: absolute;
`;
