import React,{useState} from 'react';
import './SubmitForm.css';
const SubmitForm = () => {
  const [values,setValues] = useState({
    firstname : '',
    lastname : '',
    email : ''
  })

  const [submitted,setSubmitted] = useState(false);
  const [valid , setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstname : e.target.value })
  }
  const handleLastNameInputChange = (e) => {
    setValues({...values, lastname : e.target.value })
  }
  const handleEmailNameInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleFormSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thanks for registering!</div> : null}
        <input type="text" className="form-field" placeholder="First name" name="firstname" value={values.firstname} onChange={handleFirstNameInputChange}/>
        {submitted && !values.firstname ? <span className="">Please enter a first name</span> : null}
        <input type="text" className="form-field" placeholder="Last name" name="lastname" value={values.lastname} onChange={handleLastNameInputChange} />
        {submitted && !values.lastname ? <span className="">Please enter a last name</span> : null}
        <input type="email"className="form-field" placeholder="Email" name="email" value={values.email} onChange={handleEmailNameInputChange} />
        {submitted && !values.email ? <span className="">Please enter email</span> : null}
        <button type="submit" className="form-field" value="Submit">Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm