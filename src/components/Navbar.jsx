import { NavLink } from "react-router-dom"

function Navbar() {
  return(
    <nav>
      <h1>Classic Cryptography</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="atbash">Atbash</NavLink>
      <NavLink to="rot13">ROT13</NavLink>
    </nav>
  )
}

export default Navbar