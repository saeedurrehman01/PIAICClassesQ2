"use client";

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
    <div
      className="flex flex-col items-center p-8 rounded-lg shadow-lg max-w-xs mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url('/flask-with-sand.jpeg')` }}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Stopwatch</h1>
      <div className="text-5xl font-mono mb-8 text-gray-900">
        {formatTime(time)}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
