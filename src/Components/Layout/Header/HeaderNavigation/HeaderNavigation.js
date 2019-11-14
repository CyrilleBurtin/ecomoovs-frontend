import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HeaderNavigationItem from './HeaderNavigationItem/HeaderNavigationItem'
import Logo from '../../../assets/Logo/Logo'
import './HeaderNavigation.css'

// *redux
import { connect } from 'react-redux'

const HeaderNavigation = (props) => {

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
                            !props.user ?
                                <>
                                    <NavDropdown.Divider />
                                    <HeaderNavigationItem link='/inscription'>Inscription</HeaderNavigationItem>
                                    <HeaderNavigationItem link='/connexion'>Connexion</HeaderNavigationItem>
                                </>
                                : null
                        }

                        {/* backoffice menu display handler */}
                        {
                            props.user ?
                                props.user.admin ?
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
            {props.user ? <p className="Initials">{props.user.firstname.slice(0, 1)}{props.user.lastname.slice(0, 1)}</p> : null}
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        user: state
    }
}


export default connect(
    mapStateToProps,
    null
)(HeaderNavigation)
