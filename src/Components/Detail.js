import React, { Component } from "react";

class Detail extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <h1>Repo Details</h1>
      </div>
    );
  }
}

export default Detail;
