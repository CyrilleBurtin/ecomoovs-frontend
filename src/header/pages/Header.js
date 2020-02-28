import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from '../components/navigationItems/NavigationItems';
import Logo from '../../shared/assets/logo/Logo';
import './Header.css';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../shared/auth/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const Auth = useContext(AuthContext);

  const logout = () => {
    Auth.logout();
    props.history.push('/home');
  };

  useEffect(() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const initials = document.querySelector('.initials');
    const admin = document.querySelector('.admin-links');

    const navSlide = () => {
   
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        admin.classList.remove('nav-active');
      });

      nav.addEventListener('mouseleave', () => {
        nav.classList.remove('nav-active');
      });

      initials.addEventListener('click', () => {
        admin.classList.toggle('nav-active');
        nav.classList.remove('nav-active');
      });

      admin.addEventListener('mouseleave', () => {
        admin.classList.remove('nav-active');
      });
      
    };
  
    navSlide();
  }, []);

  return (
    <nav className='header'>
      <NavLink to='/home' style={{ textDecoration: 'none' }}>
        <Logo />
      </NavLink>
      <div className='burger'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className='nav-links'>
        <NavigationItem link='/home'>Home</NavigationItem>
        <NavigationItem link='/annuaire-des-actions'>Moovs</NavigationItem>
        <NavigationItem link='/actus'>Actus</NavigationItem>
        <NavigationItem link='/events'>Events</NavigationItem>
      </div>
      <div className='admin-links'>
        {/* login and subscribe menu display handler */}
        {!Auth.isLoggedIn && (
          <>
            <NavigationItem link='/inscription'>Inscription</NavigationItem>
            <NavigationItem link='/connexion'>Connexion</NavigationItem>
          </>
        )}
        {/* backoffice menu display handler */}
        {Auth.isLoggedIn && Auth.user.admin && (
          <>
            <NavigationItem link='/backOffice'>BackOffice</NavigationItem>
            <NavigationItem link='/addnews'>Ajouter une actus</NavigationItem>
            <NavigationItem link='/info-du-compte'>
              Information du compte
            </NavigationItem>
          </>
        )}
        {Auth.isLoggedIn && (
          <>
            <NavigationItem link='/addevent'>Ajouter un évent</NavigationItem>
            <NavigationItem link='/soumettre-une-nouvelle-action'>
              Ajouter un Moov
            </NavigationItem>
            <a href='/home' className='logout' onClick={logout}>
              Déconnexion
            </a>
          </>
        )}
      </div>
      <p className='initials'>
        {Auth.isLoggedIn ? (
          Auth.user.firstname.slice(0, 1) + Auth.user.lastname.slice(0, 1)
        ) : (
          <FontAwesomeIcon icon={faSignInAlt} />
        )}
      </p>
    </nav>
  );
};

export default withRouter(Header);
