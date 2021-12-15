import React, { useContext } from "react";
import CharacterSheet from "./CharacterSheetRW/CharacterSheet";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Profile</div>
      {currentUser ? <p>{`${currentUser.username}`}</p> : <p>Loading...</p>}
      <CharacterSheet />
      <div>start lobby</div>
    </>
  );
};

export default Profile;
