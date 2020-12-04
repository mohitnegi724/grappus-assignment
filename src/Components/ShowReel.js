import React from 'react'
import '../Styles/ShowReel.css'

export default function ShowReel() {
  return (
    <div className="header-container">
      <div className="header-video-container">
        {/* Background Video With autoPlay */}
        <video id="header-background-video" width="400" autoPlay muted loop>
          <source src="https://s3.ap-south-1.amazonaws.com/grappus-website/Slowed.mp4" type="video/mp4" />
        </video>
        {/* Showreel Div Content */}
        <div className="video-overlay">
          <h1 id="overlay-text">
            We believe in perfection by design and performance by default.
          </h1>
          <p id="sub-text">
            If it's digital, we'll build it
          </p>
          <button id="showreelButton">
            View Showreel
          </button>
        </div>
      </div>
    </div>
  )
}
