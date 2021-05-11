import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="Links">
      <Link to="/">
        <img
          src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png"
          alt="pokeball"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>{" "}
      <Link to="/pokemon">Pokemon</Link> <Link to="/locations">Locations</Link>{" "}
      <Link to="/berries">Berries</Link>
    </nav>
  );
};

export default NavBar;
