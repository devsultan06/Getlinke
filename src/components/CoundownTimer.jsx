import { useEffect, useState } from "react";

const CountdownTimer = () => {
  // Set the target time (48 hours from now)
  const targetDate = new Date().getTime() + 48 * 60 * 60 * 1000; // 48 hours in milliseconds

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(intervalId);
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours,
          minutes,
          seconds,
        });
      }
    };

    // Initial call to set the timer immediately
    updateTimer();

    // Set up an interval to call updateTimer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="inline-flex text-white text-3xl mt-12 timer">
      <div className="text-center">
        <div>
          {String(timeLeft.hours).padStart(2, "0")}
          <span style={{ fontSize: "0.5em", verticalAlign: "sub" }}>H</span>
        </div>
      </div>
      <div className="mx-4">
        <div>
          {String(timeLeft.minutes).padStart(2, "0")}
          <span style={{ fontSize: "0.5em", verticalAlign: "sub" }}>M</span>
        </div>
      </div>
      <div className="mx-4">
        <div>
          {String(timeLeft.seconds).padStart(2, "0")}
          <span style={{ fontSize: "0.5em", verticalAlign: "sub" }}>S</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
