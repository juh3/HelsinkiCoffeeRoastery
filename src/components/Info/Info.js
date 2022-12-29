import React from 'react'
<<<<<<< HEAD

const jou = () => {
  return (
    <div info__container>
      <div>
        <p>jou</p>
        <img src ="roastery_inside.jpg" alt ="Roastery" />
      </div>
    
=======
import './Info.css'

const Info = () => {
  return (
    <div
      style={{
        marginLeft: '10rem',
        marginRight: '10rem',
        marginTop: '10rem',
      }}
    >
      <div className="info__container" id="about-us">
        <div className="info__image_wrapper">
          <img
            id="inside_image"
            src="roastery_inside.jpg"
            alt="Roastery"
          />
        </div>

        <div className="info__text">
          <h1 id="h1_info_text"> About us</h1>
          <p id="p_info_text">
            {' '}
            We are a small micro roastery located in central Helsinki
            at Virtual Street 12.{' '}
            {' '}
            Founded in 2020 by a group of friends. We thrive for the
            best tasting cup of coffee.{' '}
            {' '}
            You can find our products in well equipped markets as well
            as in our small store at our roastery.{' '}
          </p>
        </div>
      </div>

      <div className="info__container">
        <div className="info__text">
        <h1 id="h1_info_text"> We offer exceptional quality</h1>

          <p id="p_info_text">
            We specialize in light roast coffee and work with small
            farmers.
        
            Our passion is to offer exceptional quality coffees,
            purchased as directly as possible from farmers or through
            partners who offer transparency from their purchasing
            process down to the farmer level.
          </p>
        </div>

        <div className="info__image_wrapper">
          <img
            id="inside_image"
            src="outside.png"
            alt="Roastery sign"
          />
        </div>
      </div>
>>>>>>> 4c01402a762a1758190a8c086ec31f639b9bc1b7
    </div>
  )
}

<<<<<<< HEAD
export default jou
=======
export default Info
>>>>>>> 4c01402a762a1758190a8c086ec31f639b9bc1b7
