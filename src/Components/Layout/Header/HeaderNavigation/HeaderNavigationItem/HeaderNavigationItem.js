import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderNavigationItem.css'

const HeaderNavigationItem = (props) => (
    <li className='HeaderNavigationItem'>
        <NavLink
            to={props.link}
            activeClassName='active'>
            {props.children}
        </NavLink>
    </li>
)

export default HeaderNavigationItem
