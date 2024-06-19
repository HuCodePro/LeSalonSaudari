import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/coiffeuse/Services";
import Prestations from "./pages/estheticienne/Prestations";
import Form from "./pages/contact/Form";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coiffeuse" element={<Services />}/>
        <Route path="/estheticienne" element={<Prestations />}/>
        <Route path="/contact" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;