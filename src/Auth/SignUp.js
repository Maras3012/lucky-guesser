import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label className="x">
          Email{" "} 
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label className="y">
          Password{" "} 
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button className="z" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);