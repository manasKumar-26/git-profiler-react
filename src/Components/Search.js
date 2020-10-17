import React from "react";
import { SearchOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="searchContainer">
          <SearchOutlined />
          <input placeholder="Type an username" type="text" />
          <Button>Search</Button>
        </div>
      </div>
    );
  }
}

export default Search;
