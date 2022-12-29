import React from 'react'
import './Logo.css'
<<<<<<< HEAD
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Logo = () => {
  return (
    <div className='logo__container'>
      <div className = 'wrapper'>
        <img src = "logo.png" alt = "helsinki coffee roastery logo"/>
=======
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Logo = () => {
  return (
    <div className="logo__container">
      
      <div className="wrapper">
        <img
          id="logo__image"
          src="logo.png"
          alt="helsinki coffee roastery logo"
        />
>>>>>>> 4c01402a762a1758190a8c086ec31f639b9bc1b7
        <h1> Helsinki Coffee Roasters</h1>
        <p>Because everyone deserves a good cup of tsufe</p>
      </div>

<<<<<<< HEAD
      <div className = 'wrapper'>
        <div className='chevron'>
          <ExpandMoreIcon color = "black" sx={{ fontSize: 110 }} onClick = {() => console.log("jabadabauu")}/>
        </div>
      </div>
     
=======
      <div className="  wrapper">
        <div className="chevron">
          <a href="#about-us" data-target="#about-us">
            <ExpandMoreIcon color="black" sx={{ fontSize: 110 }} />
          </a>
        </div>
      </div>
>>>>>>> 4c01402a762a1758190a8c086ec31f639b9bc1b7
    </div>
  )
}

<<<<<<< HEAD
export default Logo
=======
export default Logo
>>>>>>> 4c01402a762a1758190a8c086ec31f639b9bc1b7
