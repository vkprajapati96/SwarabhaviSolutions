import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";

// Pages import karna zaroori hai
import Home from "../src/pages/Home";
import InteriorAndConstruction from "./pages/InteriorAndConstruction";
import About from "./pages/About";
import ConsultationForm from "./component/ConsultationForm";
import Footer from "./component/layout/Footer";
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
        <Route path="/contact" element={<ConsultationForm/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;