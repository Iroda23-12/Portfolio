import './App.css'
import Home from './components/Home'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Dior from './pages/Dior'
import Demo from './pages/Demo'
import Rism from './pages/Rism'
import FirstPr from './pages/FirstPr'
import Allproject from './Allproject/Allproject'
import { Light } from '@mui/icons-material'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dior' element={<Dior />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/rism" element={<Rism />} />
        <Route path="/project" element={<FirstPr />} />
        <Route path="/mode" element={<Light />} />
      </Routes>
      <Footer />
      {/* dark mode light mode,responsive,hidden site===скрытый сайт,language */}
    </>
  )
}

export default App