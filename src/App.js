import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MeteoNavbar from "./Components/MeteoNavbar";
import AlertBar from "./Components/AlertBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import HomeCard from "./Components/HomeCard";
import LocalWeatherDetail from "./Components/LocalWeatherDetail";
import ZoneForecast from "./Components/ZoneForecast";
import Contatti from "./Components/Contatti";

function App() {
  return (
    <BrowserRouter>
      <MeteoNavbar />
      <AlertBar />
      <Routes>
        <Route path="/" element={<HomeCard />} />
        <Route path="/weather/:city" element={<LocalWeatherDetail />} />
        <Route path="/previsioni/:zone" element={<ZoneForecast />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </BrowserRouter>
  );
}

export default App;
