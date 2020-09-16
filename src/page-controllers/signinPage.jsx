import React from "react";
import "../App.css";
import SignInForm from "../components/SignInForm";
import { User } from "../components/User.js";
import UserData from "../components/UserData";

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
      if (!data) {
        console.log("problem signing in");
      } else {
        User.storeUser(data);
        //User.fullName = data.user.fullName;
        //User.email = data.user.email;
        //console.log(User.email);
        localStorage.setItem("token", data.token);
        //SetUserContext(data.user);
        //console.log(User.props);
        window.location.pathname = "/";
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div>
        <SignInForm onSignIn={(fields) => this.onSignIn(fields)} />
        <UserData />
      </div>
    );
  }
}

export default SignInPage;
