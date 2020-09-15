import React from "react";
import "../App.css";
import Form from "../components/Form";

class SignUpPage extends React.Component {
  onSignUp = async (fields) => {
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
        `https://5sx1m.sse.codesandbox.io/api/users`,
        settings
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <Form onSignUp={(fields) => this.onSignUp(fields)} />
      </div>
    );
  }
}

export default SignUpPage;
