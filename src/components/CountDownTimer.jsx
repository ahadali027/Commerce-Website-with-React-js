import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-04-10T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="mt-4 ">
      <div className="grid grid-cols-4 gap-2 text-black text-center">
        <div className="rounded-full px-4 py-2 bg-white shadow-md">
          <span className="block text-2xl font-bold">{timeLeft.days}</span>
          <span className="block ">Days</span>
        </div>
        <div className="rounded-full px-4 py-2 bg-white shadow-md">
          <span className="block text-2xl font-bold">{timeLeft.hours}</span>
          <span className="block">Hours</span>
        </div>
        <div className="rounded-full px-4 py-2 bg-white shadow-md">
          <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
          <span className="block">Min</span>
        </div>
        <div className="rounded-full px-4 py-2 bg-white shadow-md">
          <span className="block text-2xl font-bold">{timeLeft.seconds}</span>
          <span className="block">Sec</span>
        </div>
      </div>
    </div>
  );
}
function Dana({ timeLeft }) {
  return (
    <div className="rounded-full w-max p-4 overflow-hidden  aspect-square bg-white shadow-md">
      <span className="block text-2xl font-bold">{timeLeft.days}</span>
      <span className="block "></span>
    </div>
  );
}

export default CountdownTimer;
