"use client";
import { Tooltip } from "@nextui-org/react";
import { Pause, Play, RotateCcw } from "lucide-react";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

export const PomodoroTimer = ({ expiryTimestamp }) => {
  const [isStart, setIsStart] = useState(false);
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => playNotificationSound(),
    autoStart: false,
  });
  const audioRef = React.createRef();
  const done = totalSeconds === 0;

  const playNotificationSound = () => {
    audioRef.current.play();
  };

  const handleToggle = () => {
    setIsStart((prevState) => !prevState);

    if (!isStart) {
      start();
    } else {
      pause();
    }
  };

  return (
    <div className="text-center p-5 bg-green-50 border border-green-300 rounded-xl">
      <h2 className="text-xl">Timer</h2>
      <div className="text-4xl mt-4 mb-2">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className="text-xs text-yellow-500">
        {isRunning ? (
          <span className="animate-pulse">Running..</span>
        ) : (
          "Not running"
        )}
      </p>
      <div className="mt-4 space-x-3">
        {!done ? (
          <Tooltip content={isStart || isRunning ? "Pause" : "Start"}>
            {isStart || isRunning ? (
              <button onClick={pause} className="outline-none">
                <Pause />
              </button>
            ) : (
              <button onClick={start} className="outline-none">
                <Play />
              </button>
            )}
          </Tooltip>
        ) : null}
        <Tooltip content="Restart">
          <button
            className="outline-none"
            onClick={() => {
              // Restarts
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1500); // 60 * 1500 = 25 minutes timer
              restart(time);
            }}
          >
            <RotateCcw />
          </button>
        </Tooltip>
      </div>
      {/* Audio element for the notification sound */}
      <audio ref={audioRef} src="/mixkit-achievement-bell-600.wav" />
    </div>
  );
};
