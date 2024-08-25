import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/coiffeuse/Services"; 
import Prestations from "./pages/estheticienne/Prestations";
import Form from "./pages/contact/Form";
import TarifsHomme from "./pages/coiffeuse/TarifsHomme";
import TarifsFemme from "./pages/coiffeuse/TarifsFemme";
import TarifsBrushing from "./pages/coiffeuse/TarifsBrushing";
import TarifsTechniques from "./pages/coiffeuse/TarifsTechniques";
import TarifsCoiffage from "./pages/coiffeuse/TarifsCoiffage";
import TarifsMariee from "./pages/coiffeuse/TarifsMariee";
import TarifsSoins from "./pages/coiffeuse/TarifsSoins";
import TarifEpilation from "./pages/estheticienne/TarifEpilation";
import TarifsSoinsCorps from "./pages/estheticienne/TarifsSoinsCorps";
import TarifsSoinsVisage from "./pages/estheticienne/TarifsSoinsVisage";
import TarifsRegard from "./pages/estheticienne/TarifsRegard";
import TarifsOngles from "./pages/estheticienne/TarifsOngles";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coiffeuse" element={<Services/>}/>
        <Route path="/estheticienne" element={<Prestations />}/>
        <Route path="/contact" element={<Form/>}/>
        <Route path="/homme" element={<TarifsHomme/>}/>
        <Route path="/femme" element={<TarifsFemme/>}/>
        <Route path="/brushing" element={<TarifsBrushing/>}/>
        <Route path="/technique" element={<TarifsTechniques/>}/>
        <Route path="/coiffage" element={<TarifsCoiffage/>}/>
        <Route path="/mariee" element={<TarifsMariee/>}/>
        <Route path="/soins" element={<TarifsSoins/>}/>
        <Route path="/epilation" element={<TarifEpilation/>}/>
        <Route path="/soinsducorps" element={<TarifsSoinsCorps/>}/>
        <Route path="/soinsduvisage" element={<TarifsSoinsVisage/>}/>
        <Route path="/beauteduregard" element={<TarifsRegard/>}/>
        <Route path="/beautedesongles" element={<TarifsOngles/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;