import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'

function App() {
  return (
    <>
      <ParticlesBackground>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ParticlesBackground>
      <Footer />
    </>
  )
}

export default App