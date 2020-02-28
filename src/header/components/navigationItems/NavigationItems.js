import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItems.css';

const NavigationItem = props => {

  return (
    <li className='HeaderNavigationItem'>
      <NavLink className='navitem' to={props.link} activeClassName='active'>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
