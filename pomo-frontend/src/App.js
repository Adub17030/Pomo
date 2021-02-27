import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import './App.sass';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
         
        </header> */}
        <Navbar></Navbar>
        <Landing></Landing>
      </div>
    );
  }
}

export default App;
