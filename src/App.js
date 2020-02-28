import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { AuthContext } from './shared/auth/AuthContext';

import Home from './home/pages/Home';
import News from './news/pages/News';
import MoovsList from './moovs/pages/moovsList/MoovsList';

import Header from './header/pages/Header';
import Login from './users/pages/login/Login';
import Registration from './users/pages/registration/Registration';
import { useLogin } from './shared/hooks/Login-hook';

import BackOffice from './backOffice/pages/BackOffice';
import AddNews from './news/pages/addNews/addNews';
import AddEvent from './events/pages/AddEvent';
import UserEdit from './backOffice/pages/UserEdit';
import MoovSubmit from './moovs/pages/moovSubmit/MoovSubmit';
import Footer from './footer/pages/Footer';
import EventsList from './events/pages/EventsList';

import MoovFullCard from './moovs/components/fullCard/MoovFullCard';
import EventFullCard from './events/pages/EventFullCard';

const App = props => {
  const { user, token, login, logout, isLoggedIn } = useLogin();

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoggedIn }}>
      <Router>
        <Header history={props.history} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/annuaire-des-actions' component={MoovsList} />
          <Route path='/moov' component={MoovFullCard} />
          <Route path='/actus' component={News} />
          <Route path='/events' component={EventsList} />
          <Route path='/event' component={EventFullCard} />

          {!isLoggedIn && <Route path='/inscription' component={Registration} />}
          {!isLoggedIn && <Route path='/connexion' component={Login} />}

          {isLoggedIn && user.admin && <Route path='/backOffice' component={BackOffice} />}
          {isLoggedIn && <Route path='/addnews' component={AddNews} />}
          {isLoggedIn && <Route path='/addevent' component={AddEvent} />}
          {isLoggedIn && <Route path='/info-du-compte' component={UserEdit} />}
          {isLoggedIn && <Route path='/soumettre-une-nouvelle-action' component={MoovSubmit} />}
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
