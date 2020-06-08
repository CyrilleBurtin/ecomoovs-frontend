import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../shared/auth/AuthContext';
import BlueButton from '../../shared/uiElements/BlueButton';
import ip from '../../shared/ip/Ip';

const MyMoovs = props => {
  const user = useContext(AuthContext);

  const [myMoovs, setMyMoovs] = useState([]);

  useEffect(() => {

    const getMyMoovs = async () => {
      try {
        const response = await fetch(`${ip}/moovs/myMoovs/${user.user._id}`);
        const data = await response.json();
        setMyMoovs(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user.user._id) {
      getMyMoovs();
    }
    
  }, [user.user._id]);

  const deleteMoovHandler = async moov => {
    try {
      const response = await fetch(
        `${ip}/moovs/${moov.moov._id}/${moov.moov.img.public_id}`,
        {
          method: 'delete'
        }
      );
      const data = await response.json();
      console.log('moov deleted', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  let MyMoovsList = myMoovs.map((e, i) => (
    <div style={{ display: 'flex' }} key={i}>
      <div style={{ width: '15%' }}>{e.name}</div>
      <div style={{ width: '15%' }}>{e.type}</div>
      <div>
        <BlueButton click={() => props.editMoov({ moov: e })}>Edit</BlueButton>
      </div>
      <div>
        <BlueButton click={e => deleteMoovHandler(e.moov)}>Delete</BlueButton>
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <h1 style={{ backgroundColor: '#eee', textAlign: 'center' }}>
          Liste de mes Moovs
        </h1>
      </div>
      {MyMoovsList}
    </>
  );
};

export default MyMoovs;
