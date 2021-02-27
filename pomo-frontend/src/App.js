import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import TimerPage from './components/TimerPage/TimerPage.js';


import './App.sass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Animated } from 'react-animated-css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
         
        </header> */}
       
        <Navbar></Navbar>
  
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/pomodors" component={Landing} />
          <Route path="/timer" component={TimerPage} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
