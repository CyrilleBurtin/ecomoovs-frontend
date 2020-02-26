import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import './Logo.css';

const Logo = () => (
  <p className='logo'>
    <FontAwesomeIcon icon={faTint} style={{textDecoration:'none'}} /> ECOMOOVS
  </p>
);

export default Logo;
