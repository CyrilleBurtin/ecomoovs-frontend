import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../shared/auth/AuthContext';

import ip from '../../shared/ip/Ip';

const MyMoovs = () => {
  const user = useContext(AuthContext);

  const [myMoovs, setMyMoovs] = useState([]);


  useEffect(() => {
    const getMyMoovs = () => {

      return fetch(`${ip}/moovs/myMoovs/${user.user._id}`)
        .then(response => response.json())
        .then(data => setMyMoovs(data))
        .catch(error => console.log(error));
    };
    if (user.user._id) {
      getMyMoovs();
    }
  }, [user.user._id]);

  const deleteMoovHandler = moov => {
    console.log('moov', moov.moov.img.public_id)
    fetch(`${ip}/moovs/${moov.moov._id}/${moov.moov.img.public_id}`, { method: 'delete' })
    .then (response => response.json())
    .then(console.log('moov deleted'))
  };

  let MyMoovsList = myMoovs.map((e, i) => (
    <div style={{ display: 'flex' }} key={i}>
      <div style={{ width: '20%' }}>{e.name}</div>
      <div style={{ width: '20%' }}>{e._id}</div>
      <button>Edit</button>
      <button
        style={{ marginLeft: '1%' }}
        onClick={() => deleteMoovHandler({ moov: e })}
      >
        Delete
      </button>
    </div>
  ));

  console.log('MyMoovsList', MyMoovsList);
  return MyMoovsList;
};

export default MyMoovs;
