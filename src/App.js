import Logo from './components/Logo/Logo'
import Info from './components/Info/Info'
import Location from './components/Location/Location'
import { Route, Routes } from 'react-router-dom'
import BgImage from './components/BgImage/BgImage'
import Footer from './components/Footer/Footer'
import { useEffect, useRef, useState } from 'react'
import Buy from './components/Buy/Buy'

function App() {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Logo />} />
        <Route path="#about-us" element={<Info />} />
      </Routes>

      <Info />

      <BgImage />
      <Buy />

      <Location />
      <Footer />
    </div>
  )
}

export default App
