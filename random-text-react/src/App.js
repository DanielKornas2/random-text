import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentences : [
        {
          id: 0,
          text: "Sencence 1 - random content"
        },
        {
          id: 1,
          text: "Sencence 2 - random content"
        },
        {
          id: 2,
          text: "Sencence 3 - random content"
        },
      ], 
      temporarySentence : ""
    }
  }

  handleChange = (e)  => {
    this.setState (
      {
        temporarySentence: e.target.value,
      }
    )
  }  

  handleSubmit = (e) => {
    e.preventDefault();
    const sentences = [...this.state.sentences];
    sentences[sentences.length] = {
      id: sentences.length,
      text: this.state.temporarySentence,
    }
    this.setState({
      sentences: sentences,
      temporarySentence: "",
    })
  }

  handleClick = () => {
    const sentencesLength = this.state.sentences.length;
    const randomNumber = Math.floor(Math.random() * sentencesLength )
    alert(
      `Your random sentence is: ${this.state.sentences[randomNumber].text}
      All sentences: ${this.state.sentences.map(sentence => sentence.text)}
      `
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Show random sentence</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.temporarySentence}></input>
          <input type="submit" defaultValue="Add sentence"></input>
        </form>
      </div>
    );
  }
}

export default App;
