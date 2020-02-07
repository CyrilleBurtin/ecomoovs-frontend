import React, { useState } from 'react';
import UserManagement from './UserMangement';
import MyMoovs from './MyMoovs';
import MoovEdit from '../../moovs/pages/moovSubmit/MoovEdit';

const BackOffice = () => {

  const [edit, setEdit] = useState(false);
  const [moov, setMoov] = useState({})

  const moovEdit = (moovIn) => {
    setEdit(true);
    setMoov(moovIn.moov)
  };

  return (
    <>
      {!edit ? (
        <>
          <UserManagement />
          <br />
          <br />
          <MyMoovs editMoov={moovEdit}/>
        </>
      ) : (
          <MoovEdit moov={moov}/>
          )}
    </>
  );
};

export default BackOffice;
