import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-brand">Meaning-First Literacy™ Teacher-Lab</span>
        <div className="nav-links">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/modules">Modules</NavLink>
        </div>
      </div>
    </nav>
  );
}
