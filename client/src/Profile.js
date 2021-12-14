import React, { useContext } from "react";
import CharacterSheet from "./CharacterSheet/CharacterSheet";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div>Profile</div>
      {currentUser ? (
        <div>{`${currentUser.username}`}</div>
      ) : (
        <div>Loading...</div>
      )}
      <CharacterSheet />
      <div>start lobby</div>
    </>
  );
};

export default Profile;
