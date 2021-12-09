import React, { useContext } from "react";
import CharacterSheet from "./CharacterSheet";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Profile</div>
      <div>{`${currentUser.username}`}</div>
      <CharacterSheet />
      <div>start lobby</div>
    </>
  );
};

export default Profile;
