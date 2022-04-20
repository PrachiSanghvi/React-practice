import React from 'react';

class UseStateExample extends React.Component {
constructor(props) {
  super(props);
  this.handlePlusClick = this.handlePlusClick.bind(this);
  this.handleMinusClick = this.handleMinusClick.bind(this);
  this.handleResetClick = this.handleResetClick.bind(this);
  this.state = {
    count : 0
  };
}
  handlePlusClick() {
    this.setState((prevState) => {
      return {
        count:prevState.count + 1
      };
    })
  }
  handleMinusClick() {
    this.setState((prevState)=> {
      return {
        count:prevState.count - 1
      };
    })
  }
  handleResetClick() {
    this.setState((prevState)=> {
      return {
        count:0
      };
    })
  }
  render() {
    return( <div>
      <h1>Count : {this.state.count}</h1>
      <button onClick={this.handlePlusClick}>+1</button>
      <button onClick={this.handleMinusClick}>-1</button>
      <button onClick={this.handleResetClick}>Reset</button>
    </div> 
    );
  }
}

export default UseStateExample;