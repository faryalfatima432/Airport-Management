import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"; // <-- your logo image
import "./Navbar.css"; // <-- import CSS

export default function Navbar() {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo me-2"
          />
        
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/flights">Flights</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/register">Sign Up</NavLink>
            </li>

             <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/login">Login</NavLink>
            </li>


          </ul>


        </div>

      </div>
    </nav>
  );
}
