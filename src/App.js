import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import DayPicker from '../src/containers/DayPicker.js';
import Popup from '../src/components/Popup.js';
import './App.css';

/* eslint-disable */
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact match path="/" render={() => { return <DayPicker />; }} />
        <Route exact match path="/:date" render={() => { return <DayPicker />; }} />
        <ModalRoute component={Popup} path='/:date/CreateAppointment/:time' /> 
        <ModalRoute component={Popup} path='/:date/ViewAppointment/:time' /> 
        <ModalRoute component={Popup} path='/:date/EditAppointment/:time' /> 
        <Route path="*" render={() => { return( <div>Page Not Found</div>)}} />
      </Switch>
      <ModalContainer />
      </Router>
    </div>
  );
}

export default App;
