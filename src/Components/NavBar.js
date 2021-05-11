import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="https://pbs.twimg.com/profile_images/1347869339052072963/oA0oMpur.jpg"
          alt="pokeball"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>{" "}
      <Link to="/pokemon">Pokemon</Link>{" "} 
      <Link to="/locations">Locations</Link>{" "}
      <Link to="/berries">Berries</Link>
    </nav>
  );
};

export default NavBar;
