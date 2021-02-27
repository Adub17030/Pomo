import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => (
  <div class="p-3 ml-6">
  <CountdownCircleTimer
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
  </div>
)

export default Timer;