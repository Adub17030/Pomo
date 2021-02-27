import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import './App.sass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
          <Route path="/timer" component={Landing} />
        </Switch>


       
      </div>
    );
  }
}

export default App;
