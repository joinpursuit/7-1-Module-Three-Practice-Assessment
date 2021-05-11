import React from 'react'
import { Link }  from "react-router-dom"

function NavBar() {
    return (
        <nav className="home-nav">
        <Link to="/"><img src="https://c0.klipartz.com/pngpicture/506/902/gratis-png-pokemon-omega-ruby-%E2%80%8B%E2%80%8By-alfa-zafiro-pokemon-go-poke-ball-pokemon-go.png" alt="Pokeball" /></Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
    )
}

export default NavBar
