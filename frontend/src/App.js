import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  const URL = 'http://localhost:4000/';
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

