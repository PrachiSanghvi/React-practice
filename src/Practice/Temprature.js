import React from 'react'
import { useState } from 'react/cjs/react.development';
import './Temprature.css';
const Temprature = () => {
  const [temperatureValue,setTemperatureValue] = useState(10);
  const [temperatureColor,setTemperatureColor] = useState("cold");
  const incrementTemp = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);
    if (newTemperature >= 15) {
      setTemperatureColor("hot")
    }
  }

  const decrementTemp = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if(newTemperature < 20) {
      setTemperatureColor("cold")
    }

  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        <div className="button-container">
          <button onMouseDown={incrementTemp}> +</button>
          <button onClick={decrementTemp}>- </button>
        </div>
      </div>
    </div>
  )
}

export default Temprature