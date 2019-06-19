import React from "react";
import { Link } from "@reach/router";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
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
            {!user && (
              <>
                <li>
                  <Link to="/login" className="navbar-element-last">
                    <h4>Login</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up" className="navbar-element-last">
                    <h4>Sign Up</h4>
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/profile" className="navbar-element-last">
                    <h4>{user.username}</h4>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
