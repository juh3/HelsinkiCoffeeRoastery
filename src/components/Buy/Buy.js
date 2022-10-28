import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Buy.css'
import ContactPage from '../ContactPage/ContactPage'
const Buy = () => {
  const [visible, setVisible] = useState(false)

  const switchState = (visibility) => {
    setVisible(visibility)
  }

  
  
  return (
    <div className="buy__container">
      <div className="buy__wrapper">
        <p> Did you know we also sell coffee to cafes ?</p>
        <p> Contact us below to find the best match!</p>
        {!visible && (
          <Button
            id="contact__button"
            variant="contained"
            onClick={() => setVisible(true)}
          >
            {' '}
            Contact us{' '}
          </Button>
        )}

        {visible && <ContactPage switchState = {switchState} />}
      </div>
    </div>
  )
}

export default Buy
