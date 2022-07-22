import React from 'react'

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <img src={props.img} alt="profile"/>
      <div className="user-details">
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
        <p>Age : {props.age}</p>
      </div>
    </div>
  )
}

export default ContactCard