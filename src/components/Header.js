import { Link } from "react-router-dom";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 512 512"
        >
          <title>Site logo</title>
          <path d="M256.742 37C407.512 37 501.293 355.711 501.293 355.711C531.717 408.289 493.682 474 432.826 474H79.1676C18.3185 474 -19.717 408.289 10.7069 355.711C10.7069 355.711 91.2167 37 256.742 37Z"></path>
        </svg>
        <p>guMDrop</p>
      </Link>

      <div className="nav-icons">
        <SearchBar />
        <Nav />
      </div>
    </header>
  );
}
