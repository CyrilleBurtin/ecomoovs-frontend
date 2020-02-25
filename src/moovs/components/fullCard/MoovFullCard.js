import React from 'react';

const moovFullCard = props => {

  console.log('props.navigation.moovData', props.location.moovData);
  if (props.location.moovData === undefined){
      console.log('hello')
      props.history.push('/home');
      return false
  }

  const moov = props.location.moovData;
  return (
    <>
      <img src={moov.img.eager[0].secure_url} width='100%' alt='moov'/>
      <h1>{moov.name}</h1>
      <p>{moov.type}</p>
      <p>{moov.title}</p>
      <p>{moov.punchline}</p>
      <p>{moov.description}</p>
      <p>{moov.email}</p>
      <p>{moov.phone}</p>
      <p>{moov.url}</p>
      <p>{moov.facebook}</p>
      <p>{moov.instagram}</p>
      <p>{moov.twitter}</p>
      <p>{moov.location.address}</p>
      <p>{moov.location.city}</p>
      <p>{moov.location.zipcode}</p>
      <p>{moov.location.country}</p>
    </>
  );
};

export default moovFullCard;
