import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; //буде спільним для всіх сторінок

import Slider from "./components/Slider";
import ScrollMovingText from "./components/ScrollMovingText";
import SpecialtiesSection from "./components/SpecialtiesSection";
import AboutSection from "./components/AboutSection";
import "./styles/normalize.css";
import Error404 from "./components/Error404";

import ComputerScience from "./pages/ComputerScience";
import Cybersecurity from "./pages/Cybersecurity";
import InformationSystemsAndTechnologies from "./pages/InformationSystemsAndTechnologies";

function App() {
  return (
    <>
    
      <Navbar />
      
      <Routes>
        <Route path="/" element={
            <>
              <Slider />
              <ScrollMovingText text={`ЗСУ СИЛА, ЗВ'ЯЗКІВЦЯМ СЛАВА  𝐀 `} />
              <AboutSection />
              <SpecialtiesSection />
              <ScrollMovingText text={`ОЙ У ЛУЗІ ЧЕРВОНА КАЛИНА ПОХИЛИЛАСЯ, ЧОГОСЬ НАША СЛАВНА УКРАЇНА ЗАЖУРИЛАСЯ, А МИ ТУЮ ЧЕРВОНУ КАЛИНУ ПІДІЙМЕМО 𝐀 `} />
            </>
          }
        />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/ist" element={<InformationSystemsAndTechnologies />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/404" element={< Error404/> }/>
      </Routes>
    </>
  );
}

export default App;
