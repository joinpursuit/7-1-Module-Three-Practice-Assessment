import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav 
      style={{backgroundColor:"orange"}}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
            alt="pokeballlogo"
            style={{ height: "50px", width: "50px"}}
          />
        </Link>{" "}
        <Link to="/pokemon">Pokemon</Link>{" "}
        <Link to="/locations">Locations</Link>{" "}
        <Link to="/berries">Berries</Link>{" "}
      </nav>
    </div>
  );
}
