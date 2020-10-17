import React, { Component } from "react";
import Profile from "./Profile";
import Repo from "./Repo";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
class GitComponent extends Component {
  render() {
    return (
      <div className="results_Container">
        <div className="vague_information">
          <div className="repoInformation">
            <div className="repoIcon">
              <LibraryBooksIcon />
            </div>
            <div className="repoInfo">
              <p>86</p>
              <hr />
              <p>Repositories</p>
            </div>
          </div>
          <div className="repoInformation">
            <div className="repoIcon">
              <PeopleAltIcon />
            </div>
            <div className="repoInfo">
              <p>86</p>
              <hr />
              <p>Followers</p>
            </div>
          </div>
        </div>
        <div className="searched_Details">
          <Profile />
          <Repo />
        </div>
      </div>
    );
  }
}

export default GitComponent;
