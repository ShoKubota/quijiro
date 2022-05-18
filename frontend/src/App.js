import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//compoents
import { Questions } from './containers/Questions.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/questions'>
            <Questions />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
