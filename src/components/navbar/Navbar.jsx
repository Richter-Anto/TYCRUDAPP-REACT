import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5 pr-5">
      <a className="navbar-brand" href="#">
        TESTYANTRA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link mr-2" to="/">
            Post
          </Link>
          <li>
            <Link className="nav-link btn btn-primary" to="/create-post">
              Create Post
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
