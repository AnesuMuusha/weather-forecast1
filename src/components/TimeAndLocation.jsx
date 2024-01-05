import React, { useState, useEffect } from "react";

function TimeAndLocation () {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  const formattedDateTime = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  }).format(currentDateTime);

  return (
    <div className="md:text-lg lg:text-xl xl:text-xl text-white flex flex-col items-center justify-center py-4">
      <h2>Current Date and Time</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default TimeAndLocation;