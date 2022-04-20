import React from 'react';

class NestedComponemt extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteoptions = this.handleDeleteoptions.bind(this);
    this.state = {
      options:['option1','option2','option3']
    }
  }
  handleDeleteoptions() {
    this.setState(()=> {
      return {
        options:[]
      }
    })
  }
  render() {
    const title = "Indecision app";
    const subTitle = "Short desciption";
    return(
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action hasOptions={this.state.options.length > 0}/>
        <AddOptions />
        <Options
         options={this.state.options}
         handleDeleteoptions={this.handleDeleteoptions}
         /> 
      </div>
    )
  }
}


class Header extends React.Component {
  render () {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    )
  }
}

class Action extends React.Component {
  handleClick() {
    alert("handle click");
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>What should i do ?</button>
      </div>
    )
  }
} 


class AddOptions extends React.Component {
  handleAddoption(e) {
    e.preventDefault();
    const optionValue = e.target.elements.option.value.trim();
    if (optionValue) {
      alert(optionValue)
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleAddoption}>
          <input type="text" name="option" placeholder="add options here" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
 
class Options extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.handleDeleteoptions}>Remove All</button>
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }      
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
       <option>{this.props.optionText}</option>
      </div>
    )
  }
}
 
export default NestedComponemt;