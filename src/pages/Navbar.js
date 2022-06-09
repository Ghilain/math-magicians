import { Link } from 'react-router-dom';
import React from 'react';
import './pages.css';

const Navbar = () => {
  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: 'rgb(96 68 68)',
    textTransform: 'lowercase',
    textAlign: 'center',
  };
  return (
    <header className="navHeader">
      <nav className="navBar">
        <h1 style={headerStyle}>
          Math Magicians
        </h1>
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
    </header>
  );
};
export default Navbar;
