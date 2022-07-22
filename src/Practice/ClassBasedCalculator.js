import React, { Component } from 'react'
import Buttons from './Components/Buttons';
import Input from './Components/Input';
import ClearButton from './Components/ClearButton';
import './Components/Calculator.css';
import * as math from 'mathjs';

export default class ClassBasedCalculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input:""
    }
  }

  addToInput = (val) => {
    this.setState({input : this.state.input + val})
  }

  handleEqual = () => {
    this.setState({input : math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className="calc-wrapper">
      <Input input={this.state.input}></Input>
      <div className="row">
        <Buttons handleClick={this.addToInput}>7</Buttons>
        <Buttons handleClick={this.addToInput}>8</Buttons>
        <Buttons handleClick={this.addToInput}>9</Buttons>
        <Buttons handleClick={this.addToInput}>/</Buttons>
      </div>
      <div className="row">
        <Buttons handleClick={this.addToInput}>4</Buttons>
        <Buttons handleClick={this.addToInput}>5</Buttons>
        <Buttons handleClick={this.addToInput}>6</Buttons>
        <Buttons handleClick={this.addToInput}>*</Buttons>
      </div>
      <div className="row">
        <Buttons handleClick={this.addToInput}>1</Buttons>
        <Buttons handleClick={this.addToInput}>2</Buttons>
        <Buttons handleClick={this.addToInput}>3</Buttons>
        <Buttons handleClick={this.addToInput}>+</Buttons>
      </div>
      <div className="row">
        <Buttons handleClick={this.addToInput}>.</Buttons>
        <Buttons handleClick={this.addToInput}>0</Buttons>
        <Buttons handleClick={() => this.handleEqual()}>=</Buttons>
        <Buttons handleClick={this.addToInput}>-</Buttons>
      </div>
      <div className="row">
        <ClearButton handleClear={() => this.setState({input:""})}>Clear</ClearButton>
      </div>
    </div>
    )
  }
}
