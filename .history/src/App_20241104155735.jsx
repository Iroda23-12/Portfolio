import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <>
        <Header />
        <Home/>
        <About/>
        <Skills/>
        <
      <Footer />
    </>
  )
}

export default App