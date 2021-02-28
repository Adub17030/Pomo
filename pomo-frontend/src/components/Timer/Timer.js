import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function updatePhoton(){
    fetch('https://pomo-angel.herokuapp.com/photonToggle')
  .then(response => response.json())
  .then(data => console.log(data));
}




function Timer(props){

    const [modalState, setModalState] = useState(false);

    const toggleModal = () => {    
        setModalState(!modalState)
      }

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 50; // use UNIX timestamp in seconds
 

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    
    const timerProps = {
        isPlaying: props.isPlaying,
        size: 300,
        strokeWidth: 20
      };
      
    const onCompletion = () => {
        updatePhoton()
        // toggleModal()
    }

const renderTime = (dimension, time, elapsed) => {
    
    if(elapsed == 600 || elapsed == 1200 || elapsed == 1500 || elapsed == 5){
    props.parentCallback(elapsed);
    }
// only spot this works

  return (
    <div className="time-wrapper">
      <p className="title">{time}</p> 
      <p className="subtitle">{dimension}</p>
    </div>
  );
};

    return (

  <div class="p-3" style={{marginTop: -150, marginLeft: 75}}>
  {/* <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div> */}
   <CountdownCircleTimer
        {...timerProps}
        colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        duration={50}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={() => onCompletion}
      >
    
    {({ elapsedTime }) =>
                    hourSeconds - elapsedTime < 60
                        ? renderTime(
                            'seconds',
                            getTimeSeconds(minuteSeconds - (hourSeconds - elapsedTime),
                            elapsedTime
                          )
                        )
                        : renderTime(
                              'minutes',
                              getTimeMinutes(hourSeconds - elapsedTime),
                              elapsedTime
                          )
                }


                             
      </CountdownCircleTimer>
      
      <Modal 
            closeModal={toggleModal} 
            modalState={modalState} 
            title="Example modal title"
          >
      </Modal>


</div>
);
}

export default Timer;