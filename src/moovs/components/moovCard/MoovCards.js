import React from 'react';
import './MoovCards.css';

const MoovsCards = props => {

  return (
    <>
      {props.moovList.map((e, i) => (
        <div
          key={i + 1}
          className='MoovCards'
          style={{ border: '1px solid #6DBBAD', borderRadius:'2%', width:'24%', padding:'10px', margin:'0.5%', boxSizing:'border-box', backgroundColor:'#eee' }}
        >
          <div style={{height: '150px', overflow:'hidden'}}>
            <img src={e.img.eager[0].secure_url} style={{width:'100%', maxHeight:'150px'}} alt="moov"/>
          </div> 
          <div className='CardBody'>
            <div>
              {i + 1}. {e.name}
            </div>
            <div>{e.description}</div>
            <div>{e.location.city}</div>
            <div></div>
            <div>{e.type}</div>
          </div>
          <div>
            <small className='text-muted'>{e.email}</small>
          </div>
        </div>
      ))}
    </>
  );
};

export default MoovsCards;
