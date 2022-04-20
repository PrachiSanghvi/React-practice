import React, {useState} from 'react';

const MyAccodian = ({question,answer}) => {
  const [show,setShow] = useState(false);
  return (
    <div className="accodian-main-wrapper">
      <div className="accodion-wrapper"> 
        <p className="plus-icon" onClick={() => setShow(!show)}>{show ? '-' : '+'}</p>
        <h3 className="question">{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </div>
    );
}

export default MyAccodian;