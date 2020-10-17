import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Avatar, IconButton } from "@material-ui/core";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <div className="navbar_left">
          <IconButton>
            <GitHubIcon />
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
