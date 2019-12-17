import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationItem from "../components/navigationItems/NavigationItems";
import Logo from "../../shared/assets/logo/Logo";
import "./Header.css";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
import { AuthContext } from "../../shared/auth/AuthContext";

const Header = props => {
  const Auth = useContext(AuthContext);
  console.log("Auth", Auth.user);

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
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
            {Auth && Auth.isLoggedIn && Auth.user && Auth.user.admin && (
              <>
                <NavigationItem link="/BackOffice">BackOffice</NavigationItem>
                <NavigationItem link="/addNews">
                  Ajouter une actus
                </NavigationItem>
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
      {/* {Auth && Auth.isLoggedIn ? (
        <p className="Initials">
          {Auth.user.firstname.slice(0, 1)}
          {Auth.user.lastname.slice(0, 1)}
        </p>
      ) : null} */}
    </Navbar>
  );
};

// //input
// const mapStateToProps = state => {
//   return {
//     userData: state
//   };
// };

// //output
// const mapDispatchToProps = dispatch => {
//   return {
//     onLogout: user => dispatch({ type: "LOGOUT" })
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
export default withRouter(Header);
