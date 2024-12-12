import './App.css';
import About from './components/About';
import Home from './components/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'; 
import Dior from './codesProject/Dior'; // Убедитесь, что вы импортируете этот компонент
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dior" element={<Dior />} /> {/* Добавьте маршрут для Dior */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
