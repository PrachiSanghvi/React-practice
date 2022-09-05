import React,{useState} from 'react'

const LoginForm = () => {
  const AdminUser = {
    email : "prachi@gmail.com",
    password:"test@123"
  }

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log("submit");
  }

  
  return (
    <div>
      <form onSubmit={submitHandler} className="login-form">
        <h1>Login Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Email :</label>
          <input type="email" name="enail" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password :</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group button-submit">
          <input type="submit" name="name" id="name" value="SUBMIT" className="submit__btn" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm