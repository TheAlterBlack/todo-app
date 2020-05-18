import React, { Component } from 'react';

export default class TaskInput extends Component {
  state = {
    input: ''
  };

  addTask = () => {
    const {input} = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({input: ''});
    }
  };

  handleEnter = event => {
    if (event.key === 'Enter') this.addTask();
  };

  inputChange = event => {
    this.setState({input: event.target.value});
  };

  render() {
    const {input} = this.state;

    return (
        <div className="task-input">
          <input
              onKeyPress={this.handleEnter}
              onChange={this.inputChange}
              value={input}
          />
          <button onClick={this.addTask}>ADD</button>
        </div>
    );
  }
}
