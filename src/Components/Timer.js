import React, { useState, useEffect } from 'react';



const Timer = () => {
const [second, setSecond] = useState('00');
const [minute, setMinute] = useState('00');
const [isActive, setIsActive] = useState(false);
const [counter, setCounter] = useState(0);


  useEffect(() => {
    let intervalId;

    if ( minute < 2 ) {
      setIsActive(true)
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 30);
      }, 1000)
    }

   if (minute >= 2) {
    setIsActive(false)
   }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  return (
    <div className="container">
      {isActive ?
        <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      : <p>Game is over.</p> }
   </div>
  )
}

export default Timer