import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PackagingPage from "./pages/PackagingPage/PackagingPage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/packaging" element={<PackagingPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
