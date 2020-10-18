import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <div className="navbar_left">
          <IconButton>
            <Link to="/">
              <GitHubIcon />
            </Link>
          </IconButton>
        </div>
        <div className="navbar_center">
          <p>Github-Profiler</p>
        </div>
        <div className="navbar_right">
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Navbar;
