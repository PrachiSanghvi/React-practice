import React, { Component } from 'react'

export default class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }

  increment = () => {
    this.setState({count : this.state.count + 1});
  }
  
  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Plus</button>
        <div className="">{this.state.count}</div>
        <button onClick={this.decrement}>Minus</button>
      </div>
    )
  }
}
