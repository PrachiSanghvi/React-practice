import React from 'react'

const isOperator = (val) => {
  return !isNaN(val) || val === '.' || val === "=";
}
const Buttons = (props) => (
    <div className={`button-wrapper ${isOperator(props.children) ? null : 'operator' }`} onClick={() => props.handleClick(props.children)}>{props.children}</div>
) 
export default Buttons;