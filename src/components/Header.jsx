import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center text-gray-600">
      <h1>Erin McKanna</h1>
      <nav>
        <ul>
          <li>
            <Link to={"about"}>About Me</Link>
          </li>
          <li>
            <Link to={"projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact Me</Link>
          </li>
          <li>
            <Link to={"resume"}>Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
