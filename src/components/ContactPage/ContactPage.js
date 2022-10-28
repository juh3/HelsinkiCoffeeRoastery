import { Button } from '@mui/material'
import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className="contactpage__container">
      <div className="contactpage__wrapper">
        <form>
          <p> Your email</p>
          <input />

          <p> Tell us how we can help you!</p>
          <textarea></textarea>

          <Button id="send__button" variant="contained">
            {' '}
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
