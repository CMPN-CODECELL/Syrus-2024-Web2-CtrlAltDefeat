import React, { useState, useEffect } from 'react';
import zenmodevid from '../assets/Zenmodevid.mp4';

const ZenModeComponent = ({ initialDurationInMinutes }) => {
  const [durationInMinutes, setDurationInMinutes] = useState(initialDurationInMinutes);
  const [timeRemaining, setTimeRemaining] = useState(0.05*60); // 3 seconds

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    return () => setTimeRemaining(durationInMinutes * 60);
  }, [timeRemaining, durationInMinutes]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}`;
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={zenmodevid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-4xl font-bold z-10">
        <div className="h-screen flex items-center justify-end pr-48">
          <div className=''>
            <h2 className="text-8xl font-roboto font-thin text-white tracking-wide">
              {formatTime(timeRemaining)}
            </h2>
            <div className="flex flex-col">
              <label htmlFor="durationInput" className="text-xl font-roboto font-thin">
                Set Duration (in minutes):
              </label>
              <input
                type="number"
                id="durationInput"
                value={durationInMinutes}
                onChange={(e) => setDurationInMinutes(Math.max(1, parseInt(e.target.value, 10)))}
                min="1"
                className="bg-transparent border-b text-white outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenModeComponent;
