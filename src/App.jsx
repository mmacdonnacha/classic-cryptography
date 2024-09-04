import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Atbash from './ciphers/Atbash'
import ROT13 from './ciphers/ROT13'
import Navbar from './components/Navbar'


function App() { 
  
  return(
    <BrowserRouter basename="/classic-cryptography/">
      <header>
        <nav>
          <h1>Classic Cryptography</h1>
          <NavLink to="atbash">Atbash</NavLink>
          <NavLink to="rot13">ROT13</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="atbash" element={<Atbash />} />
          <Route path="rot13" element={<ROT13 />} />
        </Routes>
      </main>
      {/* <Atbash />
      <hr />
      <ROT13 /> */}
    </BrowserRouter>
  )
}

export default App
