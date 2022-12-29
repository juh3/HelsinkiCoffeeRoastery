import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Buy.css'
import ContactPage from '../ContactPage/ContactPage'
import { motion } from 'framer-motion'

const Buy = () => {
  const [visible, setVisible] = useState(false)

  const switchState = (visibility) => {
    setVisible(visibility)
  }

  return (
    <div className="buy__container">
      <div className="buy__wrapper">
        <p> Did you know we also sell coffee to cafes ?</p>
        <p> Contact us below to find the best option!</p>
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

        {visible && (
          <motion.div
            style={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeIn' }}
          >
            <ContactPage switchState={switchState} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Buy
