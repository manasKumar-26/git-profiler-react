import React, { Component } from "react";
import { connect } from "react-redux";
class Detail extends Component {
  render() {
    const openedRepo = this.props.Repo.repository[this.props.match.params.id];
    console.log(openedRepo);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "20px",
          padding: "10px",
        }}
      >
        <div className="user_Card">
          <div className="searchedProfile_image">
            <img alt="displaypic" src={openedRepo.owner?.avatar_url} />
          </div>
          <div className="searchedProfile_info">
            <h2>Repository Owner</h2>
            <p>Username : {openedRepo.owner.login}</p>
            <p>Github Link : {openedRepo.owner.html_url}</p>
          </div>
        </div>
        <div className="repoCard">
          <h2>
            Repository Name :{openedRepo.name}
            <hr />
          </h2>
          <div className="repoScroll">
            <ul>
              <li>Forks : {openedRepo.forks}</li>
              <li>GIT Link : {openedRepo.url}</li>
              <li>Issues : {openedRepo.open_issues_count}</li>
              <li>Created :{openedRepo.created_at.substring(0, 10)}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ Repo }) {
  return {
    Repo,
  };
}
export default connect(mapStateToProps)(Detail);
