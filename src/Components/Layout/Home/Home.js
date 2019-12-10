import React, { useState, useEffect } from 'react'
import ip from '../../../Hoc/ip'

import Search from './Blocks/Search'
import Explain from './Blocks/Explain'
import Last from './Blocks/Last'
import Quotations from './Blocks/Quotations'
import Next from './Blocks/Next'
import Help from './Blocks/Help'

import './Home.css'


const Home = () => {

    const [moovs, setMoovs] = useState([]);

    useEffect(() => {
        const getSeedList = () => {
            return (fetch(`${ip}/moovs/`)
                .then(response => response.json())
                .then(data => setMoovs(data))
                .catch(error => console.log(error))
            )
            }
        getSeedList();
    }, [])


    return (
        <>
            <Search/>
            <Explain/>
            <Last last={moovs} />
            <Quotations/>
            <Next next={moovs}/>
            <Help/>
        </>
    )
}

export default Home