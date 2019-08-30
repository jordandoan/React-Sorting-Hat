import React, { Component } from 'react';
import './App.css';

import Quiz from "./components/Quiz";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 
        {
          slytherin: 0,
          gryffindor: 0,
          ravenclaw: 0,
          hufflepuff: 0,
        },
        questions: ["","","","","",""],
        winner: [],
    };
  }

  handleChange = (event) => {
    let newState = this.state;
    newState.questions[Number(event.target.name) - 1] = event.target.value;
    this.setState({questions: newState.questions});
  }

  reset = () => {
    this.setState({
      score: 
        {
          slytherin: 0,
          gryffindor: 0,
          ravenclaw: 0,
          hufflepuff: 0,
        },
        winner: [],
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.reset();
    let score = this.state.score;
    let questions = this.state.questions;
    let newWinner = this.state.winner;
    questions.forEach(answer => score[answer]++);
    let max = 0;
    for (let house in score) {
      if (score[house] > max) {
        max = score[house];
        newWinner = [house];
      } else if (score[house] === max) {
        newWinner.push(house);
      }
    }
    this.setState({winner:newWinner});
  }

  render() {
    return (
      <div className="App">
        <Quiz handleSubmit={this.handleSubmit} handleChange={this.handleChange} score={this.state.score}/>
      </div>
    );
  }
}

export default App;
