import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import './Header.css'

const HeaderSection = () => {
  return (
    <header className='header'>
    <div className="header-text container">
      <h3 className='heading-text'>
        1st Ever Cyber Security Conference from Bangladesh!
      </h3>
      <h3 className='intro'>Introducing</h3>
      <h3  className='intro'>CYBERC0N <span style={{color: '#ec398b'}}>2</span><span style={{color: '#efa506'}}>0</span><span style={{color: '#00acee'}}>2</span>2</h3>
      <p className='date-location'><LocationOnIcon style={{color: '#efa5069c'}}/> Dhaka, Bangladesh  <CalendarMonthIcon style={{color: '#efa5069c'}}/>  9 November, 2022 </p>
      <div className="videoicon-area">
      <PlayCircleOutlineIcon style={{fontSize: '3rem', color: '#fff'}}/>
      <span className="header-video-text"> Watch Promo Video</span>
      </div>
    </div>
  
    

    </header>
  )
}

export default HeaderSection;