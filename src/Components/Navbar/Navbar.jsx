
import { NavLink } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 z-[1] p-2 rounded-box w-52">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active">
                My Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <h2 className="navbar-name">Arnab Das</h2>
      </div>
      <div className="navbar-container-menu">
        <ul className="navbar-container-menu-items">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">
              My Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
       
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;

