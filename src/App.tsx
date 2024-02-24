import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PackagingPage from "./pages/PackagingPage/PackagingPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packaging" element={<PackagingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
