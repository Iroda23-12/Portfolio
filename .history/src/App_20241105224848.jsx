import './App.css'
import Home from './components/Home'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Dior from './pages/Dior'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dior' element={<Dior/>}/>
        <Route exact path="/demo" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
