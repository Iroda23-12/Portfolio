import './App.css'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Dior from './codesProject/Dior'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dior' element={<fird/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
