import React, {Component} from "react";

class Quiz extends Component {
  render() {
    if (this.props.viewQuiz) {
      return (
        <div>
          <h2>The Hogwarts House Quiz</h2>
          <form onSubmit={(event)=>this.props.handleSubmit(event)} onChange={(event) => this.props.handleChange(event)}>
            <div className="question">
              <p>How would you like to be known in history?</p>
              <label><input type="radio" name="1" value="slytherin"/>The Great</label>
              <label><input type="radio" name="1" value="gryffindor"/>The Bold</label>
              <label><input type="radio" name="1" value="ravenclaw"/>The Wise</label>
              <label><input type="radio" name="1" value="hufflepuff"/>The Good</label>
            </div>
            <div className="question">
              <p>Which of the following would you most hate people to call you?</p>
              <label><input type="radio" name="2" value="slytherin"/>Ordinary</label>
              <label><input type="radio" name="2" value="gryffindor"/>Cowardly</label>
              <label><input type="radio" name="2" value="ravenclaw"/>Ignorant</label>
              <label><input type="radio" name="2" value="hufflepuff"/>Selfish</label>
            </div>
            <div className="question">
              <p>Given the choice, would you rather invent a potion that would gurantee you:</p>
              <label><input type="radio" name="3" value="slytherin"/>Power</label>
              <label><input type="radio" name="3" value="gryffindor"/>Glory</label>
              <label><input type="radio" name="3" value="ravenclaw"/>Wisdom</label>
              <label><input type="radio" name="3" value="hufflepuff"/>Love</label>
            </div>
            <div className="question">
              <p>After you have died, what would you most like people to do when they hear your name?</p>
              <label><input type="radio" name="4" value="slytherin"/>I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts</label>
              <label><input type="radio" name="4" value="gryffindor"/>Ask for more stories about your adventures</label>
              <label><input type="radio" name="4" value="ravenclaw"/>Think with admiration of your achievements</label>
              <label><input type="radio" name="4" value="hufflepuff"/>Miss you, but smile</label>
            </div>
            <div className="question">
              <p>Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:</p>
              <label><input type="radio" name="5" value="slytherin"/>The Sea</label>
              <label><input type="radio" name="5" value="gryffindor"/>A crackling log fire</label>
              <label><input type="radio" name="5" value="ravenclaw"/>Parchment</label>
              <label><input type="radio" name="5" value="hufflepuff"/>Home</label>
            </div>
            <div className="question">
              <p>Four boxes are placed before you. Which would you try and open?</p>
              <label><input type="radio" name="6" value="slytherin"/>The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.</label>
              <label><input type="radio" name="6" value="gryffindor"/>The small pewter box, unassuming and plain, with a scratched message upon it that reads 'I open only for the worthy.'</label>
              <label><input type="radio" name="6" value="ravenclaw"/>The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.</label>
              <label><input type="radio" name="6" value="hufflepuff"/>The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.</label>
            </div>
            <button type="submit">Get Sorted</button>
          </form>
        </div>
      )
    } else {
    return (null);
    }
  }
}

export default Quiz;