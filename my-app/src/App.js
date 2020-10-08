import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import DayPicker from './containers/DayPicker.js';
import CreateAppt from './pages/CreateAppt.js';
import EditAppt from './pages/EditAppt.js';
import Request from './pages/Request.js';
import './App.css';

/* eslint-disable */

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact match path="/" render={() => { return <DayPicker />; }} />
          <Route exact match path="/:date" render={() => { return <DayPicker />; }} />
          <ModalRoute component={CreateAppt} path='/create/:date/:time' parentPath='/' />
          <Route exact match path='/view/:date/:time' render={() => { return <Request />; }} />
          <ModalRoute component={EditAppt} path='/edit/:date/:time' parentPath='/' />
          <Route path="*" render={() => { return (<div>Page Not Found</div>) }} />
        </Switch>
        <div id="modal">
          <ModalContainer />
        </div>
      </Router>
    </div>
  );
}

export default App;
