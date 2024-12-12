import { Routes, Route } from 'react-router-dom';
import Dior from './codesProject/Dior';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/dior" element={<Dior />} />
    </Routes>
  );
}

export default App;
