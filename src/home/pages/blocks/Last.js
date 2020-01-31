import React from 'react'
import MoovCards from '../../../moovs/components/moovCard/MoovCards'

const Last = (props) => 

    <div>
        <p className="mt-5" style={{ fontSize: 60, textAlign: "center", fontWeight: "bolder" }}>Les dernières initiatives</p>
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            <MoovCards moovList={props.last} />
        </div>
        <div style={{display:'flex'}} className="justify-content-center">
            <button className="rounded-0 mt-5 p-3 font-weight-bold border-0" style={{ backgroundColor: "#00e689" }}>En voir plus</button>
        </div>
    </div>

export default Last
