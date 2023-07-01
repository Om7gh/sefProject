import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { Home, Project, Skills, Contact } from "./Pages";
import { Footer, Navbar } from "./Components";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ubuntu"],
      },
    });
  });
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
