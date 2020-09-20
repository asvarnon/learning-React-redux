import React from 'react';
import './App.css';
// import Navbar from './components/Navbar'
import Clock from './components/Clock'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Shop from './components/Shop'
import Nav from './components/Nav-Example'




function App() {
  return (
      <Router>
          <div className='App'>
              <Nav />
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/about' component={About} />
                  <Route path='/shop' component={Shop} />
              </Switch>
          </div>
      </Router>
      // <Router>
      //     <Clock />
      //     <Switch>
      //         <Route path='/' />
      //     </Switch>
      // </Router>
  );
}



const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}


export default App;
