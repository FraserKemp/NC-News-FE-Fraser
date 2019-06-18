import React from "react";
import { Link } from "@reach/router";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import "./Navbar.css";

const Navbar = props => {
  const { user, logOutUser } = props;
  return (
    <div className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-items">
          <ul>
            <li>
              <Link to="/">
                <h4>Articles</h4>
              </Link>
            </li>
            <li>
              <Link to="/topics">
                <h4>Topics</h4>
              </Link>
            </li>
            <li className="spacer" />
            <li>
              <Link to="/login" className="navbar-element-last">
                <h4>Login</h4>
              </Link>
            </li>
            <li>
              <Link
                onClick={e => logOutUser(false)}
                to="/"
                className="navbar-element-last"
              >
                <h4>Logout</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

/* <div>
      <div className="toggle">
        <div className="bars">
          <i class="fas fa-bars" aria-hidden="true" />
        </div>
      </div>
      <div className="ul">
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
      </div>
    </div> */
