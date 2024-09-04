import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './ciphers/HomePage'
import Atbash from './ciphers/Atbash'
import ROT13 from './ciphers/ROT13'
import Navbar from './components/Navbar'


function App() { 
  
  return(
    <BrowserRouter basename="/classic-cryptography/">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="atbash" element={<Atbash />} />
          <Route path="rot13" element={<ROT13 />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
