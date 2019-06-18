import React from "react";
import { Link } from "@reach/router";
import "./SideDrawer.css";

const SideDrawer = props => {
  const { user, logOutUser } = props;
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">
            <h4 className="navbar-text">Articles</h4>
          </Link>
        </li>
        <li>
          <Link to="/topics">
            <h4 className="navbar-text">Topics</h4>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <h4 className="navbar-text">Login</h4>
          </Link>
        </li>
        <li>
          <Link onClick={e => logOutUser(false)} to="/">
            <h4 className="navbar-text">Logout</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
