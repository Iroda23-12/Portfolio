import './App.css'
import About from './components/About'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
