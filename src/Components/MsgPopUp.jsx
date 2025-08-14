import { useState, useEffect, useRef } from "react";

export default function MsgPopUp({message,msgType}) {
  const totalDuration = 5000; // total visible time in ms
  const fadeDuration = 500; // fade out duration in ms

    const colors = {
    error: { bg: "bg-red-50", border: "border-red-500", text: "text-red-600" },
    success: { bg: "bg-green-50", border: "border-green-500", text: "text-green-600" },
    info: { bg: "bg-orange-50", border: "border-orange-500", text: "text-orange-600" },
  };

  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [remaining, setRemaining] = useState(totalDuration);
  const pauseTimeRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const startTimers = (time) => {
    fadeTimerRef.current = setTimeout(() => {
      setFadeOut(true);
    }, time - fadeDuration);

    hideTimerRef.current = setTimeout(() => {
      setShow(false);
    }, time);
  };

  const clearTimers = () => {
    clearTimeout(fadeTimerRef.current);
    clearTimeout(hideTimerRef.current);
  };

  useEffect(() => {
    startTimers(remaining);

    return () => clearTimers();
  }, []);

  const handleMouseEnter = () => {
    clearTimers();
    pauseTimeRef.current = Date.now();
    setRemaining((prev) => prev - (Date.now() - (pauseTimeRef.current - prev + prev))); // Will adjust below
    setRemaining((prev) => prev - (Date.now() - (Date.now() - prev)));
  };

  const handleMouseLeave = () => {
    const elapsed = Date.now() - pauseTimeRef.current;
    setRemaining((prev) => {
      const newTime = prev - elapsed;
      startTimers(newTime);
      return newTime;
    });
  };

  if (!show) return null;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${colors[msgType].bg} ${colors[msgType].border} fixed z-[900] bottom-0 right-0 m-8 p-3  border-1  shadow-lg w-[70%] md:w-80 rounded-xl  flex transition-opacity bg-white/40 backdrop-blur-md  duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`
    }
    >
      <p className={`${colors[msgType].text}  pr-8`}>{message}</p>
      <button
        onClick={() => {
          clearTimers();
          setFadeOut(true);
          setTimeout(() => setShow(false), fadeDuration);
        }}
        className={`absolute top-2 right-2 bg-black-100 hover:bg-black-200 rounded-full size-8 text-black-700 `}
      >
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}
