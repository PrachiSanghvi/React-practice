import React from 'react';
import reactDom from 'react-dom';

class Calculation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:'',
      fnum:'',
      snum:'',
    };
    this.handleChange = this.handleChange(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name,value}= e.target;
    this.setState({[name]:value});
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("welcome");
  }

  render() {
    const {fnum,snum,value} = this.state;

    return (<div className="calculation">
      <form onSubmit={this.handleSubmit}>
        <span>Square of:</span>
        <input type="text" name="value" value={value} onChange={this.handleChange} />
        <span>First No:</span>
        <input type="text" name="fnum" value={fnum} onChange={this.handleChange} />
        <span>Second No:</span>
        <input type="text" name="snum" value={snum} onChange={this.handleChange} />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
      <div className="preview">
        <h1>Square of no</h1>
        <div>{Number(value) * Number(value)}</div>
      </div>
      <div className="preview">
        <h1>Result of no is</h1>
        <div>{Number(fnum) * Number(snum)}</div>
      </div>
    </div>);
  }
}

// reactDom.render(<Calculation/>,document.getElementById('root'));
export default Calculation;