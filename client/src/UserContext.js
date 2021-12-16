import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [dndApis, setDndApis] = useState();
  const [character, setCharacter] = useState({
    ability_info: [],
    ability_modifier: {},
    ability_score: {},
    alignment: "",
    character_name: "",
    class: "",
    exp_points: 0,
    level: 1,
    proficiency_bonus: 2,
    race: "",
  });
  const [characters, setCharacters] = useState([]);

  //////////////////////////////////////////////

  useEffect(() => {
    fetch("/api/profiles")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoaded(!isLoaded);
      });
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  //////////////////////////////////////////////

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api")
      .then((res) => res.json())
      .then((data) => {
        setDndApis(data);
      });
  }, []);

  //////////////////////////////////////////////

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isLoaded,
        setIsLoaded,
        currentUser,
        setCurrentUser,
        dndApis,
        character,
        setCharacter,
        characters,
        setCharacters,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
