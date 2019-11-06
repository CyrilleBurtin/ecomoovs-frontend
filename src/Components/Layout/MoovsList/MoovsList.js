import React, { useState, useEffect } from 'react'
import ip from '../../../Hoc/ip'
import MoovsCards from '../Cards/MoovCards/MoovCards'
import './MoovList.css'

const MoovsList = () => {

    const [moovs, setMoovs] = useState([])

    useEffect(() => {
        fetch(`${ip}/moovs/`)
            .then(response => response.json())
            .then(data => setMoovs(data))
            .catch(error => console.log('error', error))
    }, [])

    return (
        <>
        <div className="MoovList pl-5 pr-5">
            <MoovsCards moovList={moovs} />
        </div>
        </>
    )
}

export default MoovsList
