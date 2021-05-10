import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to=''>
          <img src="" alt="logo" />
        </Link>
        <Link to='/Pokemon'>
          <li>Pokemon</li>
        </Link>
        <Link to='/Location'>
          <li>Locations</li>
        </Link>
        <Link to="/Berries">
          <li>Berries</li>
        </Link>
      </ul>
    </nav>
  );
}
