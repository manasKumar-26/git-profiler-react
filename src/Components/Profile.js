import React, { Component } from "react";
class Profile extends Component {
  render() {
    return (
      <div className="user_Card">
        <div className="titleCard">Profile</div>

        <div className="searchedProfile_image">
          <img
            alt="displaypic"
            src="https://camo.githubusercontent.com/8234a16941f0d9bd25ad5882e0e7d0f643331983/68747470733a2f2f7261772e6769746875622e636f6d2f736568726775742f6e6f64652d7265747269636f6e2f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67"
          />
        </div>
        <div className="searchedProfile_info">
          <p>Name : manaskumar26</p>
          <p>Username : Manas</p>
          <p>Location : Banglore</p>
        </div>
      </div>
    );
  }
}

export default Profile;
