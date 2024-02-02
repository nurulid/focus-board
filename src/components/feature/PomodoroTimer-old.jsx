"use client"

import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';

export const PomodoroTimerOld = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const audioRef = React.createRef();

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsActive(false);
            playNotificationSound();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(1);
    setSeconds(0);
  };

  const playNotificationSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
      <Button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</Button>
      <Button onClick={resetTimer}>Reset</Button>

      {/* Audio element for the notification sound */}
      <audio ref={audioRef} src="/mixkit-achievement-bell-600.wav" />
    </div>
  );
};
