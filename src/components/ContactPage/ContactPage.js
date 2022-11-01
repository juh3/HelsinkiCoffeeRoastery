import { Button } from '@mui/material'
import {useState} from 'react'
import './ContactPage.css'
import textService from "../../services/textService.js"

const ContactPage = ({switchState}) => {

  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("submitted")
    console.log("")
    console.log(email)
    console.log(text)
    await textService.sendtext(email,text)
  }
  

  return (
    <div className="contactpage__container">
      <div className="contactpage__wrapper">
        <form onSubmit = {handleSubmit}>
          <p> Your email</p>
          <input type = "email" value = {email} name = "Email" onChange={({target})=> setEmail(target.value)}/>

          <p> Tell us how we can help you!</p>
          <textarea style = {{resize: 'none'}} onChange={({target})=> setText(target.value)} ></textarea>

          <Button type = "submit" id="send__button" variant="contained">
            {' '}
            Send
          </Button>

          <Button id = "close__button" variant = "contained" onClick={() => switchState(false)}>
            {' '}
            Close
          </Button>

        </form>
          
      </div>
    </div>
  )
}

export default ContactPage
