import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header component for the navigation */}
      <Header />
      {/* Main content */}
      <main>
        {/* About section */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Portfolio section */}
        <section id="portfolio" className="section">
          <Portfolio />
        </section>

        {/* Resume section */}
        <section id="resume" className="section">
          <Resume />
        </section>

        {/* Contact section */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
