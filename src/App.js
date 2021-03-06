import React from 'react';
import './App.css';
import Header from './components/header'
import Home from './components/Home';
import Detail from './components/Details'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
