"use client"

import { useState, useEffect } from "react";

export const DigitalClockOld = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = currentTime.toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <div className="p-4 text-center text-2xl border border-gray-100 bg-white rounded-md tracking-[5px]">{formatTime}</div>
  ) 
};
