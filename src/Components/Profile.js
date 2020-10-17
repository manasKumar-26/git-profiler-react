import React, { Component } from "react";
import { Button } from "@material-ui/core";
class Profile extends Component {
  showMe = (me) => {
    document.getElementsByClassName("aboutme")[0].classList.toggle("showme");
  };
  render() {
    const { searchUser } = this.props;
    return (
      <React.Fragment>
        <div className="user_Card">
          <div className="titleCard">Profile</div>
          <div className="searchedProfile_image">
            <img alt="displaypic" src={searchUser?.avatar_url} />
          </div>
          <div className="searchedProfile_info">
            <p>Name : {searchUser.name || "Unavailable"}</p>
            <p>Username : {searchUser.login}</p>
            <p>Location : {searchUser.location || "Unavailable"}</p>
            <Button
              style={{ textAlign: "left" }}
              onClick={() => this.showMe(searchUser.bio)}
            >
              About Me
            </Button>
          </div>
        </div>
        <div className="aboutme">
          <h3>About Me</h3>
          {searchUser.bio}
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
