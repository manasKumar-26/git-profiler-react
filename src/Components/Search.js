import React from "react";
import { SearchOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../Actions/Search";
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(fetchUser(searchText));
    this.setState({
      searchText: "",
    });
  };
  render() {
    const { isSearching, searchSuccess } = this.props.Search;
    return (
      <React.Fragment>
        <div className="search">
          <div className="searchContainer">
            <SearchOutlined />
            <input
              placeholder="Type an username"
              type="text"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
            <Link to="/">
              <Button onClick={this.handleSearch}>
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </Link>
          </div>
        </div>
        {searchSuccess && (
          <div
            style={{
              backgroundColor: "#0e9c19",
              width: "100%",
              height: "28px",
              textAlign: "center",
            }}
          >
            Successfully Fetched User.
          </div>
        )}
        {searchSuccess === false && (
          <div
            style={{
              backgroundColor: "#e43636",
              width: "100%",
              height: "28px",
              textAlign: "center",
            }}
          >
            Username not found
          </div>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    Search: state.Search,
  };
}
export default connect(mapStateToProps)(Search);
