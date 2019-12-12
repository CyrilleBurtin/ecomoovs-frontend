import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import './Logo.css'

const Logo = () => (
    <>
        <p className='Logo'>
            <FontAwesomeIcon icon={faTint}/> ECOMOOVS
        </p>
    </>
)

export default Logo