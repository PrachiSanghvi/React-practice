// import React from 'react';
import React, { useEffect, useState } from "react";

const Clock = () => {

  const CalculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const diffrence = +new Date(`01/06/${year}`) - +new Date();
    console.log("+new Date(01/03/year)", +new Date(`01/03/${year}`));
    console.log("+new Date()",+new Date());
    console.log("diffrence", diffrence);
    let timeLeft = {};

    if (diffrence > 0) {
      timeLeft = {
        days: Math.floor(diffrence / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffrence / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffrence / 1000 / 60) % 60),
        seconds: Math.floor((diffrence / 1000) % 60)
      };
    }
    console.log("timeLeft", timeLeft);
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateTimeLeft())
    }, 1000);

    return () => clearInterval(timer);
  })

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval} {" "}
      </span>
    )
  })

  return <div>
    <h5>Hacktoberfest {year} Countdown</h5>
    <h5>With React Hooks!</h5>
    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
  </div>;
}

export default Clock;