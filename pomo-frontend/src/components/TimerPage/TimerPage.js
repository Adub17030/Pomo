import React, {Component} from 'react';
import Banner from '../Banner/Banner.jsx';
import Timer from '../Timer/Timer.js';
import TimerCard from '../TimerCard/TimerCard.js';
// import PandaPomo from '../../assets/panda.png'

class TimerPage extends Component{

    render() {
        return (
        <div>
        
        <section class="hero is-warning is-large">
        <div class="hero-head"> 
    
        </div>
        <div class="hero-body">
         <div class="columns is-mobile is-centered">
            <div class="column is-half">
            
            {/* <img src={PandaPomo}></img> */}

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