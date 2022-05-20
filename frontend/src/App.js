import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles';

//compoents
import { Questions } from './containers/Questions.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/questions'>
            <StylesProvider injectFirst>
              <Questions />
            </StylesProvider>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
