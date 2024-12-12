import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'
import Project from './components/Project'
import Constact from './components/Contact'

function App() {
  return (
    <>
        <Header />
        <Home/>
        <About/>
        <Skills/>
        <Project/>  
        <Constact/>
      <Footer />
    </>
  )
}

export default App
