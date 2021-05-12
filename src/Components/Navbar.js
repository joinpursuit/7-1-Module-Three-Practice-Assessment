import React from 'react'
import { Link } from "react-router-dom"

//https://pngimg.com/uploads/pokeball/pokeball_PNG21.png
export default function Navbar() {
    return (
        <nav>
        <Link to="/"><img src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" alt="pokeball" width="50" height="50" /></Link> {" "}
        <Link to="/pokemon">Pokemon</Link>{" "}
        <Link to="/locations">Locations</Link>{" "}
        <Link to="/berries">Berries</Link>
      </nav>
    )
}
