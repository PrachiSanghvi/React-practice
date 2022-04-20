import React , { useState } from 'react';

const Greetings = () => {
  const currentTime = new Date();
  const getHour = currentTime.getHours();
  const grettings = 'Good Morning';
  const [greatingMsg,stateGreetingMsg] = useState(grettings);


  // if (getHour >=1 && getHour <=12) {
  //   stateGreetingMsg(grettings)
  // } else if(getHour >12 && getHour <20) {
  //   stateGreetingMsg('Good Aftenoon')
  // } else {
  //   stateGreetingMsg('Good night')
  // }

  return (<div>
    {/* <h5>Hello Sir {greatingMsg}  - {getHour}</h5> */}
    <h5>Hello Sir </h5>

  </div>);
}

export default Greetings;