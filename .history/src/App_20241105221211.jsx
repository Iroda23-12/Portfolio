import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Dior from './codesProject/Dior'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Главная страница с компонентами */}
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
          </>
        } />
        {/* Страница Dior */}
        <Route path="/dior" element={<Dior />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
