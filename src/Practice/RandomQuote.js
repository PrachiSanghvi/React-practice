import axios from 'axios';
import React, { Component } from 'react'
import './RandomQuote.css';


export default class RandomQuote extends Component {
  state = {
    advice : ''
  }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      const {advice} = response.data.slip;
      this.setState({ advice})
      console.log(advice);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    const {advice}=this.state;
    return (
      <div className="ramdom-quote-app">
      <div className="card">
        <h1 className="heading">{this.state.advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
    )
  }
}
