import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UI/pages/home";
import About from "./UI/pages/about";
import ContactUs from "./UI/pages/contact";
import Header from "./UI/layout/header";
import Footer from "./UI/layout/footer";
import bgImage from "../src/assets/svg/Group.svg";

function App() {
  return (
    <Router>
      <div
        className="h-auto flex flex-col text-white bg-gray-900"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Header */}
        <Header />

        {/* Main Content: Scrollable */}
        <main className="flex-1 p-5 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
