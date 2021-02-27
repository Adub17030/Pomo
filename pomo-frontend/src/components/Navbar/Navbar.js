import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch.js'

class Navbar extends Component{






    render() {
        return (
           
            
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
      <Link to="/">Home</Link>
      </a>

      <a class="navbar-item">
      <Link to="/pomodors">My Pomos</Link>
      </a>

      <a class="navbar-item">
      <Link to="/timer">Timer</Link>
      </a>

      <a class="navbar-item">
        About
      </a>
   </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong><Link to="/signup">Sign Up</Link>
            </strong>
          </a>
          <a class="button is-light">
          <Link to="/login">Log In</Link>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

        )
    }


}

export default Navbar;