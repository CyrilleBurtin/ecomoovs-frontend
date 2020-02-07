import React from 'react'
import MoovCards from '../../../moovs/components/moovCard/MoovCards'
import GreenButton from '../../../shared/uiElements/GreenButton';

const Last = (props) => 

    <div style={{backgroundColor:'#fff', paddingTop:'50px'}}>
        <p style={{ fontSize: 60, textAlign: "center", fontWeight: "bolder" }}>Les dernières initiatives</p>
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            <MoovCards moovList={props.last} />
        </div>
        <div style={{display:'flex'}} className="justify-content-center">
            <GreenButton>En voir plus</GreenButton>
        </div>
    </div>

export default Last
