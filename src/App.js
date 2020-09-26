import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import DayPicker from '../src/containers/DayPicker.js';
import './App.css';

/* eslint-disable */
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact match path="/" render={() => { return <DayPicker />; }} />
        <Route exact match path="/:date" render={() => { return <DayPicker />; }} />
        <Route path="*" render={() => { return( <div>Page Not Found</div>)}} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
