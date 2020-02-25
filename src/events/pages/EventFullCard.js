import React from 'react';

const EventFullCard = props => {
  const event = props.location.eventData;

  if (!event) {
    props.history.push('/home');
    return false
  }

  console.log('props.location.eventData', props.location.eventData);
  return (
    <>
      <h1>event list</h1>
      <p>{event.name}</p>
      <p>{event.dateIn}</p>
      <p>{event.dateOut}</p>
      <p>{event.punchline}</p>
      <p>{event.description}</p>
      <p>{event.city}</p>
      <p>{event.zipcode}</p>
      <p>{event.country}</p>
    </>
  );
};

export default EventFullCard;
