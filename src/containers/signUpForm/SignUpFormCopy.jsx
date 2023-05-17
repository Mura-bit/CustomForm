import { useState } from "react";
import "./signUpForm.style.css";


const defaultForm = {
    name: "",
    password: "",
}

const SignUpFormCopy = () => {
    const [getForm, setGetForm] = useState(defaultForm)

    const onChangeHandler = (e) => {
        setGetForm({ ...getForm, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(getForm);
    }

  return (
    <div className="signupcopy-container">
      <div className="signupcopy-box">
        <h1>Sign up</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input name="name" onChange={onChangeHandler} />
          <label htmlFor="password">password</label>
          <input name="password" onChange={onChangeHandler} />
          <button type="submit">sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormCopy;
