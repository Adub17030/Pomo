import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import PomoDnD from '../PomoDnD/PomoDnd.js';
import PomoCard from '../PomoCard/PomoCard.js';
import Pomos from '../../assets/pomos1.png'
import {Animated} from "react-animated-css";

class PomoPage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
          <div class="columns is-vcentered">
  <div class="column is-4">
  <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
    <p class="title is-2">Your Pomos</p>
    
    <PomoDnD></PomoDnD>
    
    </Animated>
  </div>
  <div class="column">
  <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1400} isVisible={true}>
  <div class="content">
    
</div>
</Animated>

  </div>
</div>
          </div>
        </div>
      </section>
           
            
            </div>
        );
    }
}

export default PomoPage;
