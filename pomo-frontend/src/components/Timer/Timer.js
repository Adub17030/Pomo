import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;



const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <p className="title">{time}</p> 
      <p className="subtitle">{dimension}</p>
    </div>
  );
};

function updatePhoton(){
    fetch('https://pomo-angel.herokuapp.com/photonToggle')
  .then(response => response.json())
  .then(data => console.log(data));
}


function Timer(props){
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 1500; // use UNIX timestamp in seconds
  
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    
    const timerProps = {
        isPlaying: props.isPlaying,
        size: 300,
        strokeWidth: 20
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
        duration={1500}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={() => updatePhoton()}
      >
    {({ elapsedTime }) =>
                    hourSeconds - elapsedTime < 60
                        ? renderTime(
                            'seconds',
                            getTimeSeconds(minuteSeconds - (hourSeconds - elapsedTime)
                          )
                        )
                        : renderTime(
                              'minutes',
                              getTimeMinutes(hourSeconds - elapsedTime),
                          )
                }


                             
      </CountdownCircleTimer>

      


</div>
);
}

export default Timer;