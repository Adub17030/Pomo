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
    const [isPlaying, setIsPlaying] = useState(props.isPlaying);
    const [key, setKey] = useState(0);


    const toggleModal = () => {    
        setModalState(!modalState)
      }

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 50; // use UNIX timestamp in seconds
    const remainingTime = endTime - stratTime;
    
    const timerProps = {
        isPlaying: props.isPlaying,
        size: 300,
        strokeWidth: 20
      };
      
    const onCompletion = () => {
        updatePhoton()
        toggleModal()
        setIsPlaying(false)
    }

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="title">Break Time!</div>;
      }
    else if(remainingTime > 61)
    {
        return (
        <div className="timer">
          <div className="subtitle">Remaining</div>
          <div className="title">{remainingTime}</div>
          <div className="title" style={{paddingTop:-3}}>minutes</div>
        </div>
        )
    }

      return (
        <div className="timer">
          <div className="subtitle">Remaining</div>
          <div className="title">{remainingTime}</div>
          <div className="title">seconds</div>
        </div>
      );
    
};

return (
  <div class="p-3" style={{marginTop: -150, marginLeft: 75}}>
   <CountdownCircleTimer
        {...timerProps}
        key={key}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        duration={50}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={() => {onCompletion()}}
      >
    
        {renderTime}
                             
      </CountdownCircleTimer>
      
      <Modal 
            closeModal={toggleModal} 
            modalState={modalState} 
            title="Example modal title"
          >
          <button onClick={() => setKey((prevKey) => prevKey + 1)}>
          Start Break
        </button>
      </Modal>
</div>
);
}

export default Timer;