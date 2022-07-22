import React, { useState , useEffect } from 'react'

const Revise = () => {

  //print seconds

  const [time,setTime] = useState(new Date().getSeconds())
  let [counter,setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getSeconds())
    },1000);
    return () => {
      clearInterval(interval)
    };
  }, [])

  let addOne = () => {
    setCounter(Number(counter)+1);
    renderCounter()
  }

  let minusOne = () => {
    setCounter(counter - 1);
    renderCounter()
  }

  let renderCounter = () => {
    let passData = (
      <>
        <button id="counter_id" className="plus" onClick={addOne}>Plus</button>
        <h2>COUNT : {counter}</h2>
        <button id="counter_id" className="minus" onClick={minusOne}>Minus</button>
      </>
    )
    return passData;
  }
  return (
    <>
      {/* Print seconds */}
      <div>Seconds : {time}</div>
      {/* Increment decrement */}
      {renderCounter()}
    </>
  )
}

export default Revise;