import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import Skills from './components/Skills'
import Project from './components/Project'
import Constact from './components/Contact'
import Dior from './codesProject/Dior'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Constact />
      <Route>
        <Dior path="/dior" />
      </Route>
      <Footer />
    </>
  )
}

export default App
