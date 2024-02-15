"use client";

import { useState, useEffect } from "react";
import { useTime } from "react-timer-hook";

export const DigitalClock = () => {
  const { minutes, hours, ampm } = useTime({ format: "12-hour" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="text-center py-6 px-4 bg-white border border-dashed rounded-xl">
          <div className="text-3xl tracking-widest">
            <span>{hours}</span>:<span>{minutes}</span>
            <span className="uppercase"> {ampm}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};
