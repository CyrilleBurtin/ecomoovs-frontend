import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationItem from "../components/navigationItems/NavigationItems";
import Logo from "../../shared/assets/logo/Logo";
import "./Header.css";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    const getUser = () => {
      let localToken = localStorage.getItem("AUTH_TOKEN");
      if (localToken) {
        let decodedUser = jwtDecode(localToken);
        if (decodedUser.exp > Date.now() / 1000) {
          setUserData({
            user: decodedUser.user,
            token: localToken
          });
        }
      } else {
        return false;
      }
    };
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    setUserData(false);
    props.onLogout();
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
          <NavigationItem link="/annuaire-des-actions">
            Moovs
          </NavigationItem>
          <NavigationItem link="/actus">Actus</NavigationItem>
          <NavigationItem link="/events">Events</NavigationItem>
          <NavDropdown title="Compte" id="basic-nav-dropdown">
            {/* backoffice menu display handler */}
            {userData ? (
              userData.user.admin ? (
                <>
                  <NavigationItem link="/BackOffice">
                    BackOffice
                  </NavigationItem>
                  <NavigationItem link="/addNews">
                    Ajouter une actus
                  </NavigationItem>
                </>
              ) : null
            ) : null}
            {/* login and subscribe menu display handler */}
            {!userData ? (
              <>
                <NavigationItem link="/inscription">
                  Inscription
                </NavigationItem>
                <NavigationItem link="/connexion">
                  Connexion
                </NavigationItem>
              </>
            ) : (
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
      {userData.user ? (
        <p className="Initials">
          {userData.user.firstname.slice(0, 1)}
          {userData.user.lastname.slice(0, 1)}
        </p>
      ) : null}
    </Navbar>
  );
};

//input
const mapStateToProps = state => {
  return {
    userData: state
  };
};

//output
const mapDispatchToProps = dispatch => {
  return {
    onLogout: user => dispatch({ type: "LOGOUT" })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
