import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <nav className="navBar">
    <h1>Math Magicians</h1>
    <div className="linkContainer">
      <Link to="/" className="active-link">
        Home
      </Link>
      <Link to="/calculator" className="active-link">
        Calculator
      </Link>
      <Link to="/quote" className="active-link">
        Quote
      </Link>
    </div>
  </nav>
);
export default Navbar;
