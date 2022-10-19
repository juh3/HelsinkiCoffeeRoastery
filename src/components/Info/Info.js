import React from 'react'
import "./Info.css"

const Info = () => {
  return (
    <div className = 'info__container' id = 'about-us'>
      <div>
        <h1>About us</h1>
        <img id = 'inside_image' src ="roastery_inside.jpg" alt ="Roastery" />
      </div>

      <div className ="info__text">
        <p>     We are a small micro roastery located in central Helsinki at Virtual Street 12. </p>
        <br/>
        <p>  Founded in 2020 by a group of friends. We thrive for the best tasting cup of coffee. </p>
        <br/>
        <p> You can find our products in well equipped markets as well as in our small store at our roastery.   </p>

      </div>

    
    </div>
  )
}

export default Info