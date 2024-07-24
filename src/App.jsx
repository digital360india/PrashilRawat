import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";
import Work from "./components/Work";
import Business from "./components/Business";
import Newsletter from "./components/Newsletter";
import Getintouch from "./components/Getintouch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>

        <About />
        <Portfolio />
        <Social />
        <Work />
        <Business />
        <Newsletter />
        <Getintouch />
      </BrowserRouter>
    </>
  );
}

export default App;
