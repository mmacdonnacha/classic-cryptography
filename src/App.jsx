import Atbash from './ciphers/Atbash'
import ROT13 from './ciphers/Rot13'
import Navbar from './components/Navbar'


function App() { 
  
  return(
    <>
      <Atbash />
      <hr />
      <ROT13 />
    </>
  )
}

export default App
