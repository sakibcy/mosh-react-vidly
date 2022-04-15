import React from "react";
import Form from "./common/form";
import Joi from "joi";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  });

  // username = React.createRef();

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderLoginButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
