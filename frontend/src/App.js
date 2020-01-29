import React from 'react';
import './App.css';
import LoginPage from './LoginPage'
import CreateUser from './CreateUser'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <CreateUser />
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
