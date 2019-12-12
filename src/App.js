import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./home/pages/Home";
import MoovsList from "./moovs/pages/moovsList/MoovsList";
import Header from "./header/pages/Header";
import Footer from "./footer/pages/Footer";
import News from "./news/pages/News";
import Registration from "./users/pages/registration/Registration";
import Login from "./users/pages/login/Login";
import BackOffice from "./backOffice/pages/BackOffice";
import MoovSubmit from "./moovs/pages/moovSubmit/MoovSubmit";
import { AuthContext } from "./shared/auth/AuthContext";
import { Provider } from "react-redux";


const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState("")

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

 const setUser = useCallback(()=> {
    setUserData({})
 },[])

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login : login, logout: logout, user: setUser}}>
      <Router>
        <Header history={props.history} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/annuaire-des-actions" component={MoovsList} />
          <Route path="/actus" component={News} />
          <Route path="/inscription" component={Registration} />
          <Route path="/connexion" component={Login} />
          <Route path="/backOffice" component={BackOffice} />
          <Route path="/soumettre-une-nouvelle-action" component={MoovSubmit} />
          {/*<Route path="/events" component={EventsList} />
      <Route path="/a-propos" component={About} />
    <Route path="/Contact" component={Contact} /> */}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
