import "../assets/css/Timer.css"
import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1000);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    if (hours > 0) {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  };

  return (
    <section className="component width-n-margin1">
      <h3>TIMER(this is a stopwatch -_-)</h3>
      <h3 className="title">{formatTime()}</h3>

      <div className="flex_center gap-2">
        {isRunning === false && (
          <button
            onClick={start}
            className="timer_buttons green_button"
          >
            Start
          </button>
        )}
        {isRunning === true && (
          <button
            onClick={stop}
            className="timer_buttons red_button"
          >
            Stop
          </button>
        )}
        {elapsedTime > 0 && (
          <button
            onClick={reset}
            className="timer_buttons blue_button"
          >
            Reset
          </button>
        )}
      </div>
    </section>
  );
};

export default Timer;
