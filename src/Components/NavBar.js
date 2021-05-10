import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        <img
          src="https://pbs.twimg.com/profile_images/1347869339052072963/oA0oMpur.jpg"
          alt="pokeball"
          width="30px"
          height="30px"
        />
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
