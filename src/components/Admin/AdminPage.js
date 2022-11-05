import React from 'react'
import { useNavigate } from 'react-router-dom'
const AdminPage = () => {
  const navigate = useNavigate()
  if (!window.localStorage.getItem('loggedRoasteryappUser')) {
    navigate('/')
  }
  return <div>AdminPage</div>
}

export default AdminPage
