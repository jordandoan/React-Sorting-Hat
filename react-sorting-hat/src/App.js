import React, { Component } from 'react';
import './App.css';

import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Intro from "./components/Intro";
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
        viewQuiz: false
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
    if (newWinner.length > 1) {
      newWinner = [newWinner[Math.floor(Math.random()*newWinner.length)]];
    }
    this.setState({winner:newWinner});
  }
  
  handleStart = () => {
    this.setState({viewQuiz:true});
  }

  render() {
    return (
      <div className="App">
        <Intro handleStart={this.handleStart} viewQuiz={this.state.viewQuiz}/>
        <Quiz viewQuiz={this.state.viewQuiz} handleSubmit={this.handleSubmit} handleChange={this.handleChange} score={this.state.score}/>
        <Results winner={this.state.winner} />
      </div>
    );
  }
}

export default App;
