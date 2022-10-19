import React from 'react'
import "./Location.css"

const Location = () => {


  const openingHours = [{day: 'Monday', hours: '8-12'},{ day: 'Tuesday', hours: '8-12'}, { day: 'Wednesday', hours: '8-16'}, { day: 'Thursday', hours: '8-16'}, { day: 'Friday', hours: '8-18'}]
  return (
    <div className = 'openingHours__container'>
      <div className='openingHours__wrapper'>
        <h2>Opening hours</h2>
        <ul>
        {openingHours.map((obj) => (
          <li key = {obj.day}>
            {obj.day}: {obj.hours}
          </li>
        ))}
        </ul>

      </div>

    </div>
  )
}

export default Location