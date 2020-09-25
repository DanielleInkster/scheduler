import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DayPicker from '../src/containers/DayPicker.js';
import './App.css';

/* eslint-disable */
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact match path="/" render={() => { return <DayPicker />; }} />
      </Switch>
    </div>
  );
}

export default App;
