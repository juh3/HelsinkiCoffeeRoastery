import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Admin.css"
import textService from '../../services/textService'

const AdminPage = () => {
  const [texts, setTexts] = useState()
  const navigate = useNavigate()
  if (!window.localStorage.getItem('loggedRoasteryappUser')) {
    navigate('/')
  }

  useEffect(() => {
    console.log('effeect')
    textService.gettexts()
    .then(initialTexts => {
      setTexts(initialTexts)
    })
  }, [])

  console.log(texts)

  const handleCheckboxes = (data, id) => {
    if(!data){
      return(
        <div>
          <form >
            <input type = 'checkbox' name = 'id'/>
          </form>
        </div>
      )
    }
    else{

    }
  }

  return( 
    <div className='admin__container'>
      <div className='admin__wrapper'>
        <div className='admin__header'>
          <h3> Admin view</h3>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th> Email</th>
                <th> Answered</th>
                <th> Completed</th>
              </tr>
            </thead>
            {texts?.map((entry) => (
              <tbody>
                <tr>
                  <td>
                    <p><a href = {`/admin/${entry.id}`}>{entry.email}</a></p>
                  </td>
                  <td>
                    <p> {handleCheckboxes(entry.answered, entry.id)}</p>
                  </td>
                  <td>
                    <p> {handleCheckboxes(entry.completed, entry.id)}</p>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
