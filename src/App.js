import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: "",
    };
  }

  handleInputChange = (e) => {
    const text = e.target.value;
    this.setState({ inputText: text });
  }

  countWords = () => {
    const words = this.state.inputText.split(/\s+/);
    return words.length;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Responsive Word Counter</h1>
          <textarea
            placeholder="Type your text here..."
            onChange={this.handleInputChange}
          ></textarea>
          <div className="word-count">
            Word Count: {this.countWords()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
