import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
      <p>{this.props.winner}</p>
    );
  }
}

export default Results;