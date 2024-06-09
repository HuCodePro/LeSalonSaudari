import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/coiffeuse/Services";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coiffeuse" element={<Services />}/>
        <Route path="/estheticienne" element={<Services />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;