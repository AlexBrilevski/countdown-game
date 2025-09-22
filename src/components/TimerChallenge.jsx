import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timerIsStarted, setTimerIsStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerIsStarted(false);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerIsStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerIsStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
}
