import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <AccessColorsPage />
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
