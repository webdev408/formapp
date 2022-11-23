import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">tekBYtek</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link " to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Employee">Team</NavLink>
            <NavLink className="nav-link" to="/register">Form</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
};