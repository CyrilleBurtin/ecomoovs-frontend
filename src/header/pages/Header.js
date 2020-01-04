import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationItem from "../components/navigationItems/NavigationItems";
import Logo from "../../shared/assets/logo/Logo";
import "./Header.css";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../shared/auth/AuthContext";

const Header = props => {
  const Auth = useContext(AuthContext);
  
  const logout = () => {
    Auth.logout();
    props.history.push("/home");
  };

  return (
    <Navbar expand="sm" className="NavBar">
      <Navbar.Brand>
        <NavLink to="/home">
          <Logo />
        </NavLink>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavigationItem link="/home">Home</NavigationItem>
          <NavigationItem link="/annuaire-des-actions">Moovs</NavigationItem>
          <NavigationItem link="/actus">Actus</NavigationItem>
          <NavigationItem link="/events">Events</NavigationItem>
          <NavDropdown title="Compte" id="basic-nav-dropdown">
            {/* backoffice menu display handler */}
            {Auth.isLoggedIn && Auth.user.admin && (
              <>
                <NavigationItem link="/backOffice">BackOffice</NavigationItem>
                <NavigationItem link="/addnews">Ajouter une actus</NavigationItem>
                <NavigationItem link="/addevent">Ajouter un évent</NavigationItem>
              </>
            )}
            {/* login and subscribe menu display handler */}
            {!Auth.isLoggedIn && (
              <>
                <NavigationItem link="/inscription">Inscription</NavigationItem>
                <NavigationItem link="/connexion">Connexion</NavigationItem>
              </>
            )}
            {Auth.isLoggedIn && (
              <>
                <NavDropdown.Divider />
                <NavigationItem link="/soumettre-une-nouvelle-action">
                  Ajouter un Moov
                </NavigationItem>
                <NavDropdown.Divider />
                <p className="logout" onClick={logout}>
                  Déconnexion
                </p>
              </>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {Auth.isLoggedIn ? (
        <p className="Initials">
          {Auth.user.firstname.slice(0, 1)}
          {Auth.user.lastname.slice(0, 1)}
        </p>
      ) : null}
    </Navbar>
  );
};

export default withRouter(Header);
