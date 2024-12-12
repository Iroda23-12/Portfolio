import './App.css'
import Home from './components/Home'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Dior from './pages/Dior'
import Demo from './pages/Demo'
import Rism from './pages/Rism'
import FirstPr from './pages/FirstPr'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dior' element={<Dior/>}/>
        <Route path="/demo" element={<Demo />} />
        <Route path="/rism" element={<Rism />} />
        <Route path="/project" element={<FirstPr />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
