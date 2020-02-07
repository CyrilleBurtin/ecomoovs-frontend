import React from 'react';
import MoovList from '../../../moovs/components/moovList/MoovList';

const NextEvents = props => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <p
          style={{
            fontSize: 60,
            textAlign: 'center',
            verticalAlign: 'center',
            fontWeight: 'bolder'
          }}
        >
          Les prochains événements
        </p>
      </div>
      <div>
        <MoovList moovList={props.nextEvents} />
      </div>
    </div>
  );
};
export default NextEvents;
