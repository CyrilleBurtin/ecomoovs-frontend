import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationItems.css'

const NavigationItem = (props) => (
    <li className='HeaderNavigationItem'>
        <NavLink
            to={props.link}
            activeClassName='active'>
            {props.children}
        </NavLink>
    </li>
)

export default NavigationItem
