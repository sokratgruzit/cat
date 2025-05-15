import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./store";
import { setBurger, setLangs } from "./store/appReducer";

import { Layout } from "./components/layout/Layout";
import { Home } from "./components/home/Home";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { PrettyCats } from "./components/prettyCats/PrettyCats";
import { Cube } from "./components/cube/Cube";

function App() {
  const openBurger = useAppSelector((state) => state.app.openBurger);
  const openLangs = useAppSelector((state) => state.app.openLangs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (openBurger) {
        dispatch(setBurger({ openBurger: false }));
      }

      if (openLangs) {
        dispatch(setLangs({ openLangs: false }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openBurger, dispatch, openLangs]);
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pretty-cats" element={<PrettyCats />} />
        <Route path="/cube" element={<Cube />} />
      </Route>
    </Routes>
  )
}

export default App;
