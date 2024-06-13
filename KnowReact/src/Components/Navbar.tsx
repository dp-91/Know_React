import { Link } from "react-router-dom";

const routes: Route[] = [

];

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Concepts/Lazy">Learn about Lazy</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
