import React from 'react'
import { Link }  from "react-router-dom"
import './NavBar.css'

function NavBar() {
    return (
        <nav className="home-nav">
        <Link to="/"><img src="https://www.pngfind.com/pngs/m/158-1587026_pokeball-clipart-pokemon-symbol-free-pokeball-svg-hd.png" alt="Pokeball"/></Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
    )
}

export default NavBar
