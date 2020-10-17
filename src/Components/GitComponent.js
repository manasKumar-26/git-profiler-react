import React, { Component } from "react";
import Profile from "./Profile";
import Repo from "./Repo";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { connect } from "react-redux";
class GitComponent extends Component {
  render() {
    const { searchUser } = this.props.Search;
    console.log(searchUser);
    return (
      <div className="results_Container">
        <div className="vague_information">
          <div className="repoInformation">
            <div className="repoIcon">
              <LibraryBooksIcon />
            </div>
            <div className="repoInfo">
              <p>{searchUser.public_repos}</p>
              <hr />
              <p>Repositories</p>
            </div>
          </div>
          <div className="repoInformation">
            <div className="repoIcon">
              <PeopleAltIcon />
            </div>
            <div className="repoInfo">
              <p>{searchUser.followers}</p>
              <hr />
              <p>Followers</p>
            </div>
          </div>
          <div className="repoInformation">
            <div className="repoIcon">
              <PeopleAltIcon />
            </div>
            <div className="repoInfo">
              <p>{searchUser.following}</p>
              <hr />
              <p>Following</p>
            </div>
          </div>
        </div>
        <div className="searched_Details">
          <Profile searchUser={searchUser} />
          <Repo />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Search: state.Search,
  };
}
export default connect(mapStateToProps)(GitComponent);
