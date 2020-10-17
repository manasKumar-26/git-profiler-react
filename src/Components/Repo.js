import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Repo extends Component {
  render() {
    const { repository } = this.props.Repo;
    return (
      <div className="repoCard">
        <h2>
          Repositories
          <hr />
        </h2>
        <div className="repoScroll">
          <ul>
            {repository.map((repo, index) => (
              <Link to={`/repo/${index}`} key={index}>
                <li>{repo.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Repo: state.Repo,
  };
}
export default connect(mapStateToProps)(Repo);
