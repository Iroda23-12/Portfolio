import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {
  return (
    <>
        <Header />
        <Home/>
        <About/>
        <Skills/>
        <Project/>
      <Footer />
    </>
  )
}

export default App
