import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerIsStarted, setTimerIsStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerIsStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerIsStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? <p>You lost!</p> : ''}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsStarted ? handleStop : handleStart}>
          {timerIsStarted ? 'Stop' : 'Start'} challenge
        </button>
      </p>
      <p>
        {timerIsStarted ? 'Timer is running...' : 'Timer inavtive'}
      </p>
    </section>
  );
}
