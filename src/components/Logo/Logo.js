import React from 'react'
import './Logo.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Logo = () => {
  return (
    <div className='container'>
      <div className = 'wrapper'>
        <img src = "logo.png" alt = "helsinki coffee roastery logo"/>
        <h1> Helsinki Coffee Roasters</h1>
        <p>Because everyone deserves a good cup of tsufe</p>
      </div>

      <div className = 'wrapper'>
        <div className='chevron'>
          <ExpandMoreIcon color = "black" sx={{ fontSize: 110 }} onClick = {() => console.log("jabadabauu")}/>
        </div>
      </div>
     
    </div>
  )
}

export default Logo