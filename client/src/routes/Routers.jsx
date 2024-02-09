import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loader/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const BibExpo = lazy(() => import("../pages/BibExpo"));
const RacedayInfo = lazy(() => import("../pages/RacedayInfo"));
const RouteMaps = lazy(() => import("../pages/RouteMaps"));
const PrizeMoney = lazy(() => import("../pages/PrizeMoney"));
const Contact = lazy(() => import("../pages/Contact"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Error = lazy(() => import("../pages/Error"));
const Register = lazy(() => import("../pages/Register"));
const Results = lazy(() => import("../pages/Results"));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/bib-expo"
        element={
          <Suspense fallback={<Loading />}>
            <BibExpo />
          </Suspense>
        }
      />
      <Route
        path="/race-day-info"
        element={
          <Suspense fallback={<Loading />}>
            <RacedayInfo />
          </Suspense>
        }
      />
      <Route
        path="/route-maps"
        element={
          <Suspense fallback={<Loading />}>
            <RouteMaps />
          </Suspense>
        }
      />
      <Route
        path="/prize-money"
        element={
          <Suspense fallback={<Loading />}>
            <PrizeMoney />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/gallery"
        element={
          <Suspense fallback={<Loading />}>
            <Gallery />
          </Suspense>
        }
      />
      <Route
        path="/results"
        element={
          <Suspense fallback={<Loading />}>
            <Results />
          </Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
