import Home from "../pages/Home";
import About from "../pages/About";
import BibExpo from "../pages/BibExpo";
import RacedayInfo from "../pages/RacedayInfo";
import RouteMaps from "../pages/RouteMaps";
import PrizeMoney from "../pages/PrizeMoney";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Results from "../pages/Results";
import Error from "../pages/Error";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/bib-expo" element={<BibExpo />} />
      <Route path="/race-day-info" element={<RacedayInfo />} />
      <Route path="/route-maps" element={<RouteMaps />} />
      <Route path="/prize-money" element={<PrizeMoney />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
