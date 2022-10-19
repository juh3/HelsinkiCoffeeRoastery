import Logo from "./components/Logo/Logo";
import Info from "./components/Info/Info"
import Location from "./components/Location/Location"
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
     <Routes>
        <Route exact path = "/" element = {<Logo />} />
        <Route path = "#about-us" element = {<Info />} />
     </Routes>

      <Info />

      <Location />
    </div>
  );
}

export default App;
