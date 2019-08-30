import React, {Component} from "react";

class Quiz extends Component {
  render() {
    return (
      <div>
        I am a quiz!
        <form onSubmit={(event)=>this.props.handleSubmit(event)} onChange={(event) => this.props.handleChange(event)}>
          <div>
            <p>Question</p>
            <input type="radio" name="1" value="slytherin"/><label>Hi</label>
            <input type="radio" name="1" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="1" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="1" value="hufflepuff"/><label>Hi</label>
          </div>
          <div>
            <p>Question</p>
            <input type="radio" name="2" value="slytherin"/><label>Hi</label>
            <input type="radio" name="2" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="2" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="2" value="hufflepuff"/><label>Hi</label>
          </div>
          <div>
            <p>Question</p>
            <input type="radio" name="3" value="slytherin"/><label>Hi</label>
            <input type="radio" name="3" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="3" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="3" value="hufflepuff"/><label>Hi</label>
          </div>
          <div>
            <p>Question</p>
            <input type="radio" name="4" value="slytherin"/><label>Hi</label>
            <input type="radio" name="4" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="4" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="4" value="hufflepuff"/><label>Hi</label>
          </div>
          <div>
            <p>Question</p>
            <input type="radio" name="5" value="slytherin"/><label>Hi</label>
            <input type="radio" name="5" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="5" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="5" value="hufflepuff"/><label>Hi</label>
          </div>
          <div>
            <p>Question</p>
            <input type="radio" name="6" value="slytherin"/><label>Hi</label>
            <input type="radio" name="6" value="gryffindor"/><label>Hi</label>
            <input type="radio" name="6" value="ravenclaw"/><label>Hi</label>
            <input type="radio" name="6" value="hufflepuff"/><label>Hi</label>
          </div>
          <button type="submit">Get Sorted</button>
        </form>
      </div>
    )
  }
}

export default Quiz;