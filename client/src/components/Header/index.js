////////////////////////////////////////////////////////////////////
// THIS FILE IS CURRENTLY UNUSED - WILL EITHER USE OR DELETE LATER//
////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <h1>Home</h1>
          </Link>
          <div className="navbar-links">
            {Auth.loggedIn() ? (
              <>
                <Link to="/me" className="navbar-link">
                  Profile
                </Link>
                <a href="/" onClick={logout} className="navbar-link">
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login" className="navbar-link">
                  Login
                </Link>
                <Link to="/signup" className="navbar-link">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
