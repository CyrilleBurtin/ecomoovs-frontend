import React from 'react';
import MoovList from '../../../moovs/components/moovList/MoovList';


const NextEvents = props => {
  return (
    <>
      <div className="next">
        <p className="title"
          
        >
          Les prochains événements
        </p>
      </div>

      <div style={{width: '90%', margin: '10px auto'}}>
            <div
                style={{
                  display: 'flex',
                  width: '90%',
                  justifyContent: 'space-around',
                  flexFlow: 'row wrap',
                  borderBottom: '1px solid #ddd',
                  marginBottom: '5px'
                }}
              >
                <p style={{ width: '15%', minWidth: '150px', margin: '5px 0', fontWeight: 'bold' }}>Date</p>
                <p style={{ width: '15%', minWidth: '150px', margin: '5px 0', fontWeight: 'bold' }}>Nom</p>
                <p style={{ width: '15%', minWidth: '150px', margin: '5px 0', fontWeight: 'bold' }}>Ville</p>
                <p style={{ width: '20%', minWidth: '150px', margin: '5px 0', fontWeight: 'bold' }}>Titre</p>
                <div style={{width: '5%', minWidth: '60px'}}>
                  
                </div>
             </div>
        </div>

        <MoovList moovList={props.nextEvents} />
   

    </>
  );
};
export default NextEvents;
