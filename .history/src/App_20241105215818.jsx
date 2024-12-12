import './App.css';
import About from './components/About';
import Home from './components/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'; 
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/about" element={<About />} /> {/* О нас */}
        <Route path="/skills" element={<Skills />} /> {/* Навыки */}
        <Route path="/projects" element={<Project />} /> {/* Проекты */}
        <Route path="/contact" element={<Contact />} /> {/* Контакт */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
