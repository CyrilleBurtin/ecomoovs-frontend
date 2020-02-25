import React from 'react';
import NextEventsList from '../../../events/pages/nextEventsList';

const NextEvents = props => {
  return (
    <>
      <div className='next'>
        <p className='title'>Les prochains événements</p>
      </div>
      <NextEventsList />
    </>
  );
};
export default NextEvents;
