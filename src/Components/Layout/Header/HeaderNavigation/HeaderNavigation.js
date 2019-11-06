import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import HeaderNavigationItem from './HeaderNavigationItem/HeaderNavigationItem'
import UserContext from '../../../Context/UserContext'
import Logo from '../../../assets/Logo/Logo'
import './HeaderNavigation.css'

const HeaderNavigation = () => {

    const newUser = useContext(UserContext)
    console.log('newUser', newUser)

    return (
        <Navbar expand="lg" className="NavBar">
            <Navbar.Brand href="#home">
                <Logo />
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
                        <NavDropdown.Divider />
                        <HeaderNavigationItem link='/connexion'>Connexion</HeaderNavigationItem>
                        <HeaderNavigationItem link='/inscription'>Inscription</HeaderNavigationItem>
                        <HeaderNavigationItem link='/BackOffice'>BackOffice</HeaderNavigationItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <p style={{color:"#fff"}}>{newUser.name}</p>
        </Navbar>
    )
}

export default HeaderNavigation
