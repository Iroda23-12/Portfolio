import './App.css';
import About from './components/About';
import Home from './components/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact'; 
import { Routes, Route } from 'react-router-dom'; // Импортируем необходимые компоненты для маршрутизации

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/about" element={<About />} /> 
        <Route path="/skills" element={<Skills />} /> {/* Навыки */}
        <Route path="/projects" element={<Project />} /> {/* Проекты */}
        <Route path="/contact" element={<Contact />} /> {/* Контакт */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
