import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return (
      <div className="nav-bar">
        <Link to="/">
            <img
              className="home-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
              alt="home"
            />
        </Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </div>
    );
}
