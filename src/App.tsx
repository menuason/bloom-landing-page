import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PackagingPage from "./pages/PackagingPage/PackagingPage";
import CataloguePage from "./pages/Catalogue/CataloguePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import OurSystemPage from "./pages/OurSystemPage/OurSystemPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MissionAndVisionPage from "./pages/MissionAndVisionPage/MissionAndVisionPage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packaging" element={<PackagingPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-system" element={<OurSystemPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/mission-and-vision" element={<MissionAndVisionPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
