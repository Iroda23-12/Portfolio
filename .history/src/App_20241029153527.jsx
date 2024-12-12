import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <>
    <Hea
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
