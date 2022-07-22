import React from 'react';

// Created object
const userData = {
  name:'prachi',
  age:'23',
  address:'helmet cross road',
  stream:['commerce','diploma','science'],
  printUserData() {
    console.log(this.name);
    console.log(this.age);
    this.stream.forEach((userstream) => {
      console.log(this.name + '  has taken  ' + userstream + 'stream');
    });
  },
  printUserStream(){
    return this.stream.map((userstream) => this.name + ' has taken ' + userstream);
  }  
};

const mutliplier = {
  number :[1,2,3,4,5],
  multiplyBy : 5,
  multiply() {
    return this.number.map((num) => num * this.multiplyBy)
  }
}

// random number generate
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * userData.stream.length);
  const option = userData.stream[randomNum];
  console.log(option);
}

userData.printUserData();
console.log(userData.printUserStream());
console.log("mutliplier",mutliplier.multiply());

let counter = 0;
const addOne = () => {
  counter++;
  console.log("1 added",counter);
  renderCounter()
}

const minusOne = () => {
  counter--;
  console.log("1 minus",counter);
  renderCounter()
}

const reset = () => {
  counter = 0;
  console.log("reset button",counter);
  renderCounter()
}

// Mathamatical oparation +, - .reset button
const numbers= [55,100,25]
const appRoot = document.getElementById('root');
const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count:{counter}</h1>
      <button id="counter_id" className="button" onClick={addOne}>Plus</button>
      <button id="counter_id" className="button" onClick={minusOne}>Minus</button>
      <button id="counter_id" className="button" onClick={reset}>Reset</button>
      <button onClick={onMakeDecision}>Random option selection</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number : {number*2}</p>
        })
      }
    </div>
  );
  // reactDom.render(templateTwo,appRoot)
  return templateTwo;
}

// on form submit option add on array
const onFormSubmit = (e) => {
  e.preventDefault(); 
  const optionValue = e.target.elements.option.value;
  if (optionValue) {
    userData.stream.push(optionValue);
    e.target.elements.option.value = '';
    OptionForm();
  } 
}

// removeall button click
const removeAll = () => {
  userData.stream = [];
  OptionForm();
}

// Form that has input and button and remove all button
const OptionForm = () => {
  const inputForm = (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
        {userData.stream.length > 0 ? userData.stream.map(streamOption => <p>{streamOption}</p>):'No options available'}
        {userData.stream.length}
        {userData.stream.length > 0 ? <button onClick={removeAll}>Remove All</button>:''}
      </form>
    </div>
  );
  // reactDom.render(inputForm,appRoot);
}

 
// check for location exists
function getLocation (location) {
  if (location) {
    return <p className="user-address">UserAddress:{location}</p>;
  }
}

// print user data
function CreateObj () {
  return <div>
    {/* <p className="course-name">Course name is {this.props.courseName}</p> */}
    <p className="user-name">UserName:{userData.name ? userData.name : 'Anonymous'}</p>
    {/* check for age and age > 18 */}
    {userData.age && (userData.age) >= 18 && <p className="user-age">UserAge:{userData.age}</p>}
    {getLocation(userData.address)}
    {/* print stream array options */}
    {userData.stream.length > 0 ? userData.stream.map(streamOption => <p>{streamOption}</p>):'No options available'}
    {/* counter + on click */}
    {renderCounter()}
    {OptionForm()}
  </div>;
}

//arrow function with split string
const squareArrow = (x) => x.split(' ')[0] ;
console.log("squareArrow",squareArrow("prachi sanghvi"));

class Udemy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return CreateObj();
  }
}

export default Udemy;