import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedInUsers, setLoggedInUsers] = useState([]);

  const selectUser = (username) => {
    if (username) {
      const user = { username };
      setCurrentUser(user);
      setLoggedInUsers(prevUsers => [...prevUsers, user]);
    } else {
      setCurrentUser(null);
    }
  };

  const logout = (username) => {
    setLoggedInUsers(prevUsers => prevUsers.filter(user => user.username !== username));
    if (currentUser && currentUser.username === username) {
      setCurrentUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, loggedInUsers, selectUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
