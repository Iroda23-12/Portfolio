import './App.css';
import About from './components/About';
import Home from './components/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'; // Corrected here
import { Routes, Route } from 'react-router-dom'; // Make sure to import Route
import Dior from './codesProject/Dior';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact /> {/* Corrected here */}
      <Footer />
      <Routes>
        <Route path='/'/>
        <Route path="/dior" element={<Dior />} />
      </Routes>
    </>
  );
}

export default App;
