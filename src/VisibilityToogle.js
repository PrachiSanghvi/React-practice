import React from 'react';
const visible = '';
class VisiblilityToogle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      visible : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState((prevState) => {
      return {
        visible : !prevState.visible
      } 
    })
  }
  render() {
    return (<div>
       <p>Visiblility App</p>
       <button className="show-button" onClick={this.handleClick}>{this.state.visible ? 'Hide detail': 'Show detail' }</button>
       {this.state.visible && (
       <div><p>After show button click content show</p>
       </div>)}
    </div>);
  }
}

export default VisiblilityToogle;


// class VisiblilityToogle extends React.Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       button: true
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState({
//       button:!this.state.button
//     })
//   }
//   render(){
//     return (
//     <div className="container">
//       <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> Hi!!</button>  
//     </div>
//     )
//   }
  
// }

// export default VisiblilityToogle;