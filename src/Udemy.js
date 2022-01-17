import React from 'react';

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

userData.printUserData();
console.log(userData.printUserStream());
console.log("mutliplier",mutliplier.multiply());
 
// check for location exists
function getLocation (location) {
  if (location) {
    return <p className="user-address">UserAddress:{location}</p>;
  }
}

const addOne = () => {
  console.log("1 added");
}

// print user data
function CreateObj () {
  let count = 0;
  return <div>
    {/* <p className="course-name">Course name is {this.props.courseName}</p> */}
    <p className="user-name">UserName:{userData.name ? userData.name : 'Anonymous'}</p>
    {/* check for age and age > 18 */}
    {userData.age && (userData.age) >= 18 && <p className="user-age">UserAge:{userData.age}</p>}
    {getLocation(userData.address)}
    {/* print stream array options */}
    {userData.stream.length > 0 ? userData.stream.map(streamOption => <p>{streamOption}</p>):'No options available'}
    {/* counter + on click */}
    <h1>Count:{count}</h1>
    <button id="counter_id" className="button" onClick={addOne}>Click to increase counter</button>
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