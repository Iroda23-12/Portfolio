import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'
import Project from './components/Project'
import Constact from './components/Contact'
import Dior from './codesProject/Dior'
import { Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Constact />} />
        <Route path="/dior" element={<Dior />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
