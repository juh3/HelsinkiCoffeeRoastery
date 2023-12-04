import Logo from './components/Logo/Logo';
import Info from './components/Info/Info';
import Location from './components/Location/Location';
import { Route, Routes } from 'react-router-dom';
import BgImage from './components/BgImage/BgImage';
import Footer from './components/Footer/Footer';
import { Suspense, useEffect, useRef, useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import AdminPage from './components/Admin/AdminPage.js';
import TextView from './components/TextView/TextView';
import './App.css';
import Buy from './components/Buy/Buy.js';
import Loading from './components/Loading/Loading.js';
import SplashScreen from './components/Splash/Splash';

function App() {
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  const handleUser = (userInfo) => {
    setUser(userInfo);
  };

  const Main = () => {
    const [bg, setBg] = useState(false);
    const [allowScroll, setAllowScroll] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () =>
          setBg(window.scrollY > window.innerHeight)
        );
      }
    }, []);

    return (
      <div
        className={bg ? 'transition-bg' : 'bg'}
        style={{ overflow: allowScroll ? 'auto' : 'hidden' }}
      >
        {!allowScroll && (
          <SplashScreen onDisappear={() => setAllowScroll(true)} />
        )}
        {allowScroll && (
          <Suspense fallback={<Loading />}>
            <Logo />
            <Info bg={bg} />
            <BgImage />
            <Buy />
            <Location />
            <Footer />
          </Suspense>
        )}
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="#about-us" element={<Info />} />
        <Route path="/login" element={<LoginForm handleUser={handleUser} />} />
        <Route path="/admin" element={<AdminPage />} replace />
        <Route path="/admin/:id" element={<TextView />} replace />
      </Routes>
    </div>
  );
}

export default App;
