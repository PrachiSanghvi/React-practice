import React, { useState } from 'react'
import './LoginForm.css'
const LoginForm = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      userName: 'prachi',
      passWord: 'prachi@123'
    },
    {
      userName: 'prakruti',
      passWord: 'prakruti@123'
    }
  ]

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password'
  }


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    //get values for inputs of form when submit by input name attribute
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.userName === uname.value)
    if (userData) {
      if (userData.passWord != pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname })
    }
  }
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="username input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="password input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="submit button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
  return (
    <div className="login-form">
      <div className="title">Sign in</div>
      {isSubmitted ? <div>User has successfully loggedin</div> : renderForm}
    </div>
  );
}

export default LoginForm