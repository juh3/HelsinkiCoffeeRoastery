import './LoginForm.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import userService from '../../services/userService'
import { useNavigate } from 'react-router-dom'
const LoginForm = ({ handleUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', email, password)
    try {
      const user = await userService.login({ email, password })
      window.localStorage.setItem(
        'loggedRoasteryappUser',
        JSON.stringify(user)
      )
      handleUser(user)
      setEmail('')
      setPassword('')
      navigate('/admin')
    } catch (exception) {}
  }

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            name="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <label> Password</label>
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button type="submit" variant="contained">
            {' '}
            SIGN IN
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
