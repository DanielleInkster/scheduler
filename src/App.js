import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import DayPicker from '../src/containers/DayPicker.js';
import CreateAppt from '../src/components/CreateAppt.js';
import EditAppt from '../src/components/EditAppt.js';
import Request from '../src/components/Request.js';
import './App.css';

/* eslint-disable */

function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact match path="/" render={() => { return <DayPicker />; }} />
        <Route exact match path="/:date" render={() => { return <DayPicker />; }} />
        <ModalRoute component={CreateAppt} path='/:date/CreateAppointment/:time' parentPath='/'/> 
        <Route exact match path='/:date/ViewAppointment/:time'render={() => { return <Request />; }} />
        <ModalRoute component={EditAppt} path='/:date/EditAppointment/:time'parentPath='/'/> 
        <Route path="*" render={() => { return( <div>Page Not Found</div>)}} />
      </Switch>
      <ModalContainer/>
      </Router>
    </div>
  );
}

export default App;
