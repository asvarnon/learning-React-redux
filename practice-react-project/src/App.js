import React from 'react';
import './App.css';
// import Navbar from './components/Navbar'
import Clock from './components/Clock'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav-Example';
import Item from './components/Item-detail';
import Tweets from './components/tweets';
import Counter from './components/Counter';
import Weather from './components/Weather-forecast';




function App() {

  return (
      <Router>
          <div className='App'>
              <Nav />
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/about' exact component={About} />
                  <Route path='/shop' exact component={Shop} />
                  {/*<Route path='/weather' exact component={Weather}/>*/}
                  <Route path='/tweets' exact component={Tweets}/>
                  <Route path='/counter' exact component={Counter}/>
                  <Route path='/shop/:id' component={Item} />
              </Switch>
          </div>
      </Router>
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
