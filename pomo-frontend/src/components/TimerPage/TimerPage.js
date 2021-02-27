import React, {Component} from 'react';
import Banner from '../Banner/Banner.jsx';
import Timer from '../Timer/Timer.js';
import TimerCard from '../TimerCard/TimerCard.js';
import PandaPomo from '../../assets/redpanda.png'

class TimerPage extends Component{

    render() {
        return (
        <div>
        
        <section class="hero is-warning is-large">
        <div class="hero-head"> 
    
        </div>
        <div class="hero-body">
         <div class="columns is-mobile is-centered">
            <div class="column">
            
            <img style={{marginTop: -250}}src={PandaPomo}></img>
            
            </div>
            <div class="column">

            <Timer></Timer>

            </div>
         </div>
         
            </div>


        </section>
        
        <section class="hero is-danger is-large">
        <div class="hero-body">
          <div class="container has-text-centered">



             </div>
            </div>
        </section>


        </div>
        )
    }


}

export default TimerPage;