import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="../../Practice/assets/video-1.mp4" autoPlay loop muted />
      <h2>Advanture special</h2>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
      </div>
    </div>
  )
}

export default HeroSection