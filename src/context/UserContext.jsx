import React, { createContext, useState } from "react";

export const userContext = createContext("default");

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleUpdate = (logInUser) => {
    if (logInUser === "") {
      setUser(logInUser);
    } else {
      setUser({ ...logInUser });
    }
  };

  return (
    <userContext.Provider value={{ user: user, setUser: handleUpdate }}>
      {children}
    </userContext.Provider>
  );
};
