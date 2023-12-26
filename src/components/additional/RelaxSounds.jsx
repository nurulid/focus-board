"use client";

import { Button } from "@nextui-org/react";
import React, { useRef, useState, useEffect } from "react";

export const RelaxSounds = ({ src, autoRepeat = false }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleEnded = () => {
      if (autoRepeat) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        setIsPlaying(false);
      }
    };

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      audioRef.current.removeEventListener("ended", handleEnded);
    };
  }, [autoRepeat]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>Relax sounds</h2>
      <audio ref={audioRef} src={src} />
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
    </div>
  );
};
