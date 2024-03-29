import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav
      className={menuToggle ? "site-navigation toggled" : "site-navigation"}
      id="site-navigation"
    >
      <button
        className="menu-toggle"
        aria-controls="header-menu"
        aria-expanded={menuToggle ? "true" : "false"}
        aria-label="Menu Toggle"
        onClick={() => {
          menuToggle ? setMenuToggle(false) : setMenuToggle(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <title>Menu icon</title>
          <path d="M2 5h20"></path>
          <path d="M2 12h20"></path>
          <path d="M2 19h20"></path>
        </svg>
      </button>
      <ul className="nav-menu" id="header-menu">
        <li>
          <Link to="/about" onClick={() => setMenuToggle(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/favourites" onClick={() => setMenuToggle(false)}>
            Favourites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
