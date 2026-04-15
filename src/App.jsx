import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";

// Pages import karna zaroori hai
import Home from "../src/pages/Home";
import InteriorAndConstruction from "./pages/InteriorAndConstruction";
import About from "./pages/About";
import ConsultationForm from "./component/ConsultationForm";
import Footer from "./component/layout/Footer";
import CostEstimator from "./pages/CostEstimator";
import ServicesPage from "./pages/ServicesPage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<InteriorAndConstruction/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/CostEstimator" element={<CostEstimator/>} />
        <Route path="/contact" element={<ConsultationForm/>} />
        <Route path="/Services" element={<ServicesPage/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;