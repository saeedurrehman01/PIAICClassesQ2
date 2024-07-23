import React, { useState, useRef } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const formatTime = (time: number) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Stopwatch</h1>
      <div className="text-3xl font-mono mb-4">{formatTime(time)}</div>
      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
