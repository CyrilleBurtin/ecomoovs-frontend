import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Components/Layout/Home/Home";
import MoovsList from "./Components/Layout/MoovsList/MoovsList";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import News from "./Components/Layout/News/News";
import Registration from "./Components/Layout/Registration/Registration";
import Login from "./Components/Layout/Login/Login";
import BackOffice from "./Components/Layout/BackOffice/BackOffice";
import MoovSubmit from "./Components/Layout/MoovSubmit/MoovSubmit";
import { AuthContext } from "./Components/shared/AuthContext";
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
