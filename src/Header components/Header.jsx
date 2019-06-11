import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = props => {
  const { user, logOutUser } = props;
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-element">
          <h4>Articles</h4>
        </Link>
        <Link to="/topics" className="navbar-element">
          <h4>Topics</h4>
        </Link>
        <div className="last-navbar-element">
          {!user && (
            <>
              <Link to="/login" className="navbar-element">
                <h4>Login</h4>
              </Link>
              <Link to="/sign-up" className="navbar-element">
                <h4>Sign Up</h4>
              </Link>
            </>
          )}
          {user && (
            <Link to="/profile" className="navbar-element">
              <h4>{user.username}</h4>
            </Link>
          )}
          {user && (
            <Link
              onClick={e => logOutUser(false)}
              to="/"
              className="navbar-element"
            >
              <h4>Logout</h4>
            </Link>
          )}
        </div>
      </nav>
      <Link to="/">
        <h1>
          <span className="first-letter">N</span>orthcoders
          <span className="first-letter">N</span>ews
        </h1>
      </Link>
    </div>
  );
};

export default Header;
