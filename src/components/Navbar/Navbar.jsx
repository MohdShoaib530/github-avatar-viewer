import "./Navbar.css";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

function Navbar({ updateSearchTerm }) {
  const debounced = useDebounce((e) => updateSearchTerm(e.target.value));

  return (
    <div className="Navbar">
      <img src={reactLogo} className="Navbar-logo" alt="logo" />
      <p>Github Avatar</p>
      <input
        id="github-user-search"
        type="text"
        placeholder="Github username"
        className="inputUser"
        onChange={debounced}
      />
      <ul className="Navbar-nav">
        <li className="Navbar-item">
          <Link to="/" className="Navbar-link">
            Home
          </Link>
        </li>
        <li className="Navbar-item">
          <Link to="/" className="Navbar-link">
            About
          </Link>
        </li>
        <li className="Navbar-item">
          <Link to="/" className="Navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

