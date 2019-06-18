import React, { Component } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import SideDrawer from "../Header components/SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import "./Header.css";

class Header extends Component {
  state = { sideDrawerOpen: false };
  render() {
    const { user, logOutUser } = this.props;
    const { sideDrawerOpen } = this.state;
    let backDrop;
    if (sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClick} />;
    }
    return (
      <div className="header">
        <Navbar
          user={user}
          logOutUser={logOutUser}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer user={user} logOutUser={logOutUser} show={sideDrawerOpen} />
        {backDrop}
        <Link to="/">
          <h1 className="constant-title">
            <span className="first-letter">N</span>orthcoders
            <span className="first-letter">N</span>ews
          </h1>
        </Link>
      </div>
    );
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };
}

export default Header;
