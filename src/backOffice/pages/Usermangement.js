import React, { useState, useContext, useEffect } from "react";
import UsersList from "../components/userManagement/UsersList";
import { AuthContext } from "../../shared/auth/AuthContext";
import ip from "../../shared/ip/Ip";

const UserManagement = () => {
  const Auth = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch(`${ip}/users`, {
      method: "GET",
      body: null,
      headers: new Headers({
        authorization: `Bearer ${Auth.token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
      .then(result => result.json())
      .then(users => setUserList(users))
      .catch(error => console.log(error));
  }, [Auth]);

  var list = userList.map((user, i) => (
    <UsersList user={user} key={i} cle={i} />
  ));

  return list;
};

export default UserManagement;
