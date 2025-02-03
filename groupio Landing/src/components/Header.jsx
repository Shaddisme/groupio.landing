import { NavLink } from "react-router";

function Header() {
  return (
    <div>
      <ul className="flex flex-row justify-start items-center gap-4">
        <NavLink to={"/"}>
          <li>home</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li> contact us </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
