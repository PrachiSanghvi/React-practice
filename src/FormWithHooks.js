import React ,{useState} from 'react';

const FormWithHooks = () => {
  const state = useState();
  const [name,stateName] = useState();
  const [fullName,stateFullName] = useState();

  const black = '#000';
  const [color,stateBg]=useState(black);
  const defaultBtnName = 'Background change';
  const [btnName,stateBtnName] = useState(defaultBtnName);
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const ChangeEvent =(e) => {
    stateName(e.target.value);
  }
  const ClickEvent = (e) => {
    stateFullName(name);
  }
  const bgChange = () => {
    const changedColor = '#800080';
    const changeBtnName = 'Oh..Great! 😃'
    stateBg(changedColor);
    stateBtnName(changeBtnName)
  }
  return (<div style={{backgroundColor:color}}>
    <h1 contentEditable="true">Hello {fullName}</h1>
    <p>Today Date : {currentDate}</p>
    <p>Today Date : {currentTime}</p>

    <input type="text" onChange={ChangeEvent} placeholder="Enter your name" value={name} /><br></br>
    <button onClick={ClickEvent}>Submit</button>
    <button onClick={bgChange}>{btnName}</button>
  </div>);
}

export default FormWithHooks;