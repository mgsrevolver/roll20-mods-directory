import React from 'react'
import copyname from './images/copyname.png'
import campaignsettings from './images/campaign-settings.png'
import searchbox from './images/searchbox.png'

const Instructions = () => {
  return (
    <div className="instructions">
      <span className="intro-item">
        Find a mod you like and copy the name.
        <img src={copyname} className="photo" alt="Find a Mod" />
      </span>
      <span className="intro-item">
        In your campaign settings, click Mod Scripts.
        <img src={campaignsettings} className="photo" />
      </span>
      <span className="intro-item">
        Paste the name and add script.
        <img src={searchbox} className="photo" />
      </span>
    </div>
  )
}

export default Instructions
