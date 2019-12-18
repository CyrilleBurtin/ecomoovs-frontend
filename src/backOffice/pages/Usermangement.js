import React, { useState, useContext, useEffect } from "react";
import UsersList from "../components/userManagement/UsersList";
import { AuthContext } from "../../shared/auth/AuthContext";
import ip from "../../shared/ip/Ip";

const UserManagement = () => {

  const Auth = useContext(AuthContext);
  console.log('Auth', Auth)
  const [userList, setUserList] = useState({});
  console.log('userList', userList)
  useEffect(() => {
    fetch(`${ip}/users/:${Auth.token}`)
      .then(result => result.json())
      .then(users => setUserList(users))
      .catch(error => console.log(error));
  }, [Auth]);

  // var list = userList.map((e, i) => <UsersList key={i} user={e} />);
  let list = true
  return  list ;

};

export default UserManagement;