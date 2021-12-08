import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    fetch("/api/profiles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        setIsLoaded(!isLoaded);
      });
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        isLoaded,
        setIsLoaded,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
