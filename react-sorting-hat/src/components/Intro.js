import React, { Component } from "react";

class Intro extends Component {
  render() {
    if (!this.props.viewQuiz) {
      return(
        <div className="intro">
          <h1>The Sorting Hat</h1>
          <p>Welcome to your first day at Hogwarts. Before we get you settled in, you must put on the Sorting Hat to decide which House. The four Houses are Gryffindor, Hufflepuff, Slytherin and Ravenclaw, named after the original founders of Hogwarts. Each house is associated with different traits and characteristics.</p>
          <button onClick={this.props.handleStart}>Begin The Quiz</button>
        </div>
      );
    } else {
      return null
    }
  }
}

export default Intro;