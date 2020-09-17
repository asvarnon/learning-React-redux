import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Clock from './components/Clock'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
      <Router>
          <Clock />
          <Navbar />
          <Switch>
              <Route path='/' />
          </Switch>
      </Router>
  );
}



export default App;
