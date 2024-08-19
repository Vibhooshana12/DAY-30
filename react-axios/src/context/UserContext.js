import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import userApi from "../Api";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(userApi)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addUser = (user) => {
    axios
      .post(userApi, user)
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => console.error("Error adding user:", error));
  };

  const updateUser = (id, updatedUser) => {
    axios.put(`${userApi}/${id}`, updatedUser)
      .then(response => {setUsers(users.map(user => user.id === id ? response.data : user))})
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios
      .delete(`${userApi}/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
