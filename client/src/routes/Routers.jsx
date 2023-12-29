import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Results from "../pages/Results";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Signup from "../pages/Signup";
import AdminDetail from "../pages/Admin/AdminDetail";
import Admin from "../pages/Admin/Admin";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/results" element={<Results />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:id" element={<AdminDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
