import './App.css'
import Home from './components/Home'
import Footer from './footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Dior from './pages/Dior'
import Demo from './pages/Demo'
import Rism from './pages/Rism'
import FirstPr from './pages/FirstPr'
import { useTranslation } from 'react-i18next'
function App() {
  const { t } = useTranslation()

  const handleSelectChange = e => {
    const selectedLanguage = e.target.value
    console.log(selectedLanguage)
    perevod.changeLanguage(selectedLanguage)
  }
  return (
    <>
      <div>
        <select onChange={handleSelectChange}>
          <option value="uz">uzb</option>
          <option value="en">Eng</option>
        </select>
      </div>
      <h1>{t('hello')}</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dior' element={<Dior />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/rism" element={<Rism />} />
        <Route path="/project" element={<FirstPr />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
