import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Layout/Home/Home'
import MoovsList from './Components/Layout/MoovsList/MoovsList'
import Header from './Components/Layout/Header/Header'
import Footer from './Components/Layout/Footer/Footer'
import News from './Components/Layout/News/News'
import Registration from './Components/Layout/Registration/Registration'
import Login from './Components/Layout/Login/Login'
import BackOffice from './Components/Layout/BackOffice/BackOffice'
import MoovSubmit from './Components/Layout/MoovSubmit/MoovSubmit'


function App(props) {

  return (
    <Router>
        <Header history={props.history}/>
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
        </Switch>
        <Footer />

    </Router>

  )
}

export default App;
