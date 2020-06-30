import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import country from './Components/Country'
import CountrInfo from './Components/CountryInfo'
import Weather from './Components/Weather';

function App() {
  return (
    <div className="container mt-3">
      <Router>
        <Switch>
          <Route exact path='/' component={country}/>
          <Route exact path='/countryinfo' component={CountrInfo}/>
          <Route exact path='/weather' component={Weather}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
