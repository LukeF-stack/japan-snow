import React from "react";
import "../App.css";
import SignInForm from "../components/SignInForm";

class SignInPage extends React.Component {
  onSignIn = async (fields) => {
    //console.log("signupPage got", fields);

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fields)
    };
    try {
      const response = await fetch(
        `https://5sx1m.sse.codesandbox.io/api/auth/login`,
        settings
      );
      const data = await response.json();
      //console.log(data);
      localStorage.setItem("token", data.token);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <SignInForm onSignIn={(fields) => this.onSignIn(fields)} />
      </div>
    );
  }
}

export default SignInPage;
