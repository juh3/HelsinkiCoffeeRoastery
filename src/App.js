import Logo from './components/Logo/Logo'
import Info from './components/Info/Info'
import Location from './components/Location/Location'
import { Route, Routes } from 'react-router-dom'
import BgImage from './components/BgImage/BgImage'
import Footer from './components/Footer/Footer'
import { useEffect, useRef, useState } from 'react'
import Buy from './components/Buy/Buy'
import LoginForm from "./components/LoginForm/LoginForm"

function App() {
  const ref = useRef(null)
  const [map, setMap] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  const handleUser = (userInfo) => {
    setUser(userInfo)
  }

  const Main = () => {
    return(
      <div>
        <Logo />
        <Info />
        <BgImage />
        <Buy />
        <Location />
      </div>
    )
  }
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="#about-us" element={<Info />} />
        <Route path = "/login" element = {<LoginForm handleUser = {handleUser} />}/>
      </Routes>

      
      <Footer />
    </div>
  )
}

export default App
