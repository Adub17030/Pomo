import React, {Component} from 'react';
import Banner from '../Banner/Banner.jsx';
import Timer from '../Timer/Timer.js';
import TimerCard from '../TimerCard/TimerCard.js';
import PandaPomo from '../../assets/redpanda.png'
import PandaTeacher from '../../assets/teacher_trsp.gif'
import Pinata from '../../assets/pinata.gif'
import Studying from '../../assets/studying.gif'
import MagicCat from '../../assets/magiccat.gif'

class TimerPage extends Component{
    constructor() {
        super();
        this.state = {
          timerOn: false,
          timeData: 25,
        };
      }

    startTimer(){
        this.setState({
            timerOn: true
        })

    }

    stopTimer(){
        this.setState({
            timerOn: false
        })

    }


    handleTimeCallback = (childData) =>{
        this.setState({timeData: childData})
    }

    render() {
        return (
        <div>
        
        <section class="hero is-warning is-large">
        <div class="hero-head"> 
        <p className="title is-1 pt-3">FINISH SOME HOMEWORK</p>
        </div>
        <div class="hero-body">
         <div class="columns is-mobile is-centered" style={{marginLeft: 75}}>
            <div class="column">
            
            <img style={{marginTop: -250, width: 600, height: 450, borderRadius: 20}} src={Studying}></img>
            
            </div>
            <div class="column" style={{marginTop: -75}}>

            <Timer isPlaying={this.state.timerOn}  parentCallback = {this.handleTimeCallback}></Timer>

             <div class="buttons" style={{marginTop: 50, marginLeft: 55}} >
            <button class="button is-info is-medium is-hovered">BREAK?</button>
            <button class="button is-success is-medium is-hovered" onClick={() => this.startTimer()}>START</button>
            {this.state.timerOn 
            ?
            <button class="button is-danger is-medium is-hovered" onClick={() => this.stopTimer()} >PAUSE</button>
            :
            <button class="button is-danger is-medium is-hovered" onClick={() => this.startTimer()}>UNPAUSE</button>
            }
            </div>        



            </div>
         </div>
         <div class="columns is-mobile is-centered">
            <div class="column is-one-third"></div>
            <div class="column">
           

            </div>
            <div class="column"></div>
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