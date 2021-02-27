import React, {Component} from "react";
import "bulma";
import Pomos from '../../assets/pomos1.png'
import {Animated} from "react-animated-css";
 

class Banner extends Component {
  render() { 
    return (
      <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
          <div class="columns is-vcentered">
  <div class="column is-6">
  <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
    <img src={Pomos}></img>
    </Animated>
  </div>
  <div class="column">
  <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1400} isVisible={true}>
  <div class="content">
  <p class="title is-1">Learn more. Play More. Do more.</p>
  <p class="title is-1"><strong>With Pomo.</strong></p>
  <button class="button is-link is-large is-rounded">Get Started</button>
</div>
</Animated>

  </div>
</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;