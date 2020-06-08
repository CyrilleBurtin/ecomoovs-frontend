import React, { useState, useContext, useEffect } from 'react';
import UsersList from '../components/userManagement/UsersList';
import { AuthContext } from '../../shared/auth/AuthContext';
import ip from '../../shared/ip/Ip';

const UserManagement = () => {
  const Auth = useContext(AuthContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userList = async () => {
      try {
        const response = await fetch(`${ip}/users`, {
          method: 'GET',
          body: null,
          headers: new Headers({
            authorization: `Bearer ${Auth.token}`,
            'Content-Type': 'application/json',
          }),
        });
        const user = await response.json();
        setUserList(user);
      } catch (error) {
        console.log(error);
      }
    };

    userList();
    
  }, [Auth]);

  if (userList.length > 0) {
    var list = userList.map((user, i) => (
      <UsersList user={user} key={i} cle={i} />
    ));
  }

  return (
    <>
      {userList.length > 0 && (
        <>
          <div>
            <h1 style={{ backgroundColor: '#eee', textAlign: 'center' }}>
              Liste des Utilisateurs
            </h1>
          </div>
          {list}
        </>
      )}
    </>
  );
};

export default UserManagement;
