import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import textService from '../../services/textService'
const TextView = () => {
  const { id } = useParams()
  const [ text, setText] = useState()

  useEffect(() => {
    
    textService.findById(id).then(initialText => setText(initialText))
  }, [])
  console.log(text)
  return (
    <div>
      <p>TextView id </p>
      <p> {id}</p>
      <p>{text?.text}</p>
    </div>
  )
}

export default TextView