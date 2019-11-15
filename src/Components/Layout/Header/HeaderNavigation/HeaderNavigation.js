import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HeaderNavigationItem from './HeaderNavigationItem/HeaderNavigationItem'
import Logo from '../../../assets/Logo/Logo'
import './HeaderNavigation.css'
import jwtDecode from 'jwt-decode';

// *redux
import { connect } from 'react-redux'



const HeaderNavigation = (props) => {

    const [userData, setUserData] = useState(false)
console.log('userData', userData)
    useEffect(() => {
        let localToken = localStorage.getItem('AUTH_TOKEN')
        if (localToken) {
            let decodedUser = (jwtDecode(localToken))
            if (decodedUser.exp > Date.now() / 1000) {
                setUserData({
                    user: decodedUser.user,
                    token: localToken
                })
            }
        } else if (props.userData) {
            setUserData(props.userData)
        }
    }, [props.userData])

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN')
        setUserData(false)
        props.onLogout()
    }

    return (
        <Navbar expand="sm" className="NavBar">
            <Navbar.Brand>
                <NavLink to="/home"><Logo /></NavLink>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <HeaderNavigationItem link='/home'>Home</HeaderNavigationItem>
                    <HeaderNavigationItem link='/annuaire-des-actions'>Moovs</HeaderNavigationItem>
                    <HeaderNavigationItem link='/actus'>Actus</HeaderNavigationItem>
                    <HeaderNavigationItem link='/events'>Events</HeaderNavigationItem>
                    <NavDropdown title="Compte" id="basic-nav-dropdown">
                        <HeaderNavigationItem link='/soumettre-une-nouvelle-action'>Ajouter un Moov</HeaderNavigationItem>
                        <HeaderNavigationItem link='/addNews'>Ajouter une actus</HeaderNavigationItem>

                        {/* login and subscribe menu display handler */}
                        {
                            !userData
                                ?
                                <>
                                    <NavDropdown.Divider />
                                    <HeaderNavigationItem link='/inscription'>Inscription</HeaderNavigationItem>
                                    <HeaderNavigationItem link='/connexion'>Connexion</HeaderNavigationItem>
                                </>
                                :
                                <>
                                    <NavDropdown.Divider />
                                    <button onClick={logout}>Déconnexion</button>
                                    <HeaderNavigationItem link='home' onClick={logout}>Déconnexion</HeaderNavigationItem>
                                </>
                        }

                        {/* backoffice menu display handler */}
                        {
                            userData ?
                                userData.user.admin?
                                    <>
                                        <NavDropdown.Divider />
                                        <HeaderNavigationItem link='/BackOffice'>BackOffice</HeaderNavigationItem>
                                    </>
                                    : null
                                : null
                        }

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            {userData.user ? <p className="Initials">{userData.user.firstname.slice(0, 1)}{userData.user.lastname.slice(0, 1)}</p> : null}
        </Navbar>
    )
}

//input
const mapStateToProps = state => {
    return {
        userData: state
    }
}

//output
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: user => dispatch({ type:'LOGOUT'})
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderNavigation)
