import React from "react";
import "../App.css";
import Form from "../components/Form";

class SignUpPage extends React.Component {
  onSignUp = (fields) => {
    console.log("signupPage got", fields);
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
