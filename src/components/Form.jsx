import React from "react";
import "../App.css";

class Form extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: ""
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSignUp(this.state);
    this.setState({
      fullName: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="form">
        <h1 className="page-title">Create Account</h1>
        <form action="">
          <input
            name="fullName"
            value={this.state.fullname}
            placeholder="Full Name"
            onChange={(e) => this.change(e)}
          />
          <input
            name="email"
            value={this.state.fullname}
            placeholder="Email"
            onChange={(e) => this.change(e)}
          />
          <input
            name="password"
            type="password"
            value={this.state.fullname}
            placeholder="Password"
            onChange={(e) => this.change(e)}
          />
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
