import React, { Component } from "react";

class Results extends Component {
  render() {
    let winner = this.props.winner;
    if (winner.length == 0) {
      return (
        null
      );
    } else if (winner == "gryffindor") {
        return (
          <div className="house gryffindor">
            <h2>Gryffindor</h2>
            <p>Members of Gryffindor are brave and determined. They are willing to stand up for what they believe in, even if it will get them in trouble.</p>
            <p>The founder is Godric Gryffindor. Famous alumni include:
              <ul>
                <li>Albus Dumbledore</li>
                <li>Harry Potter</li>
                <li>Sirius Black</li>
              </ul>
            </p>
          </div>
        );
    } else if (winner == "slytherin") {
        return (
          <div className="house slytherin">
            <h2>Slytherin</h2>
            <p>Members of Slytherin are cunning and ambitious, always striving to be the best wizard they can be. They will never leave their comrades behind</p>
            <p>The founder is Salazar Slytherin. Famous alumni include:
              <ul>
                <li>Severus Snape</li>
                <li>Merlin</li>
                <li>Tom Riddle</li>
              </ul>
            </p>
          </div>
        );
    } else if (winner == "hufflepuff") {
        return (
          <div className="house hufflepuff">
            <h2>Hufflepuff</h2>
            <p>Members of Hufflepuff are trustworthy, loyal and hardworking. The animal of Hufflepuff is the badger.</p>
            <p>The founder is Helga Hufflepuff. Famous wizards include:
              <ul>
                <li>Newt Scamander</li>
                <li>Cedric Diggory</li>
                <li>Eglantine Puffett</li>
              </ul>
            </p>
          </div>
        );
    } else {
        return (
          <div className="house ravenclaw">
            <h2>Ravenclaw</h2>
            <p>Members of Ravenclaw are clever, creative, and possess great wit. Ravenclaws are competitive and are willing to even betray others to come out on top. </p>
            <p>The founder is Rowena Ravenclaw. Famous wizards include:
              <ul>
                <li>Garrick Ollivander</li>
                <li>Gilderoy Lockhart</li>
                <li>Uric the Oddball</li>
              </ul>
            </p>
          </div>
        )
    }
  }
}

export default Results;