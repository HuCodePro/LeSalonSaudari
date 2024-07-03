import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/coiffeuse/Services"; 
import Prestations from "./pages/estheticienne/Prestations";
import Form from "./pages/contact/Form";
import TarifsHomme from "./pages/coiffeuse/TarifsHomme";
import TarifsFemme from "./pages/coiffeuse/TarifsFemme";
import TarifsBrushing from "./pages/coiffeuse/TarifsBrushing";
import TarifsTechniques from "./pages/coiffeuse/TarifsTechniques";

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
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;