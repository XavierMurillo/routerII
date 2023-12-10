import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const setClassName = ({ isActive }) => (isActive ? "active" : "notActive");
  return (
    <div className="navWrapper">
      <img src="src\assets\img\icon.png" className="pokemonImg" />
      <div className="optionsWrapper">
        <NavLink className={setClassName} to="/">
          Home
        </NavLink>
        <NavLink className={setClassName} to="pokemones">
          Pokemones
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarComponent;
