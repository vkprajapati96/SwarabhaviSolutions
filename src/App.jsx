import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";

// Pages import karna zaroori hai
import Home from "../src/pages/Home";
import About from "./pages/About";
import ConsultationForm from "./component/ConsultationForm";
import Footer from "./component/layout/Footer";
import CostEstimator from "./pages/CostEstimator";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./component/ScrollToTop";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/about" element={<About />} />
        <Route path="/CostEstimator" element={<CostEstimator />} />
        <Route path="/contact" element={<ConsultationForm />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/project/:id" element={<ProjectDetails />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;