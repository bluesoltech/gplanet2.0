import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Results from "../pages/Results";
import Forgot from "../pages/Forgot";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Signup from "../pages/Signup";
import MyAccount from "../Dashboard/user-account/MyAccount";
import PaySuccs from "../pages/PaySuccs";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import Verify from "../components/Verification/Verify";
import Change from "../components/Change/Change";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/results" element={<Results />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/paymentsuccess" element={<PaySuccs />} />
      <Route path="/user/:id/verify/:token" element={<Verify />} />
      <Route path="/user/:id/forgot/:token" element={<Change />} />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
