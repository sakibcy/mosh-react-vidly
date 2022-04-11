import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  username = React.createRef();

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  validate = () => {
    const errors = {};

    const {account} = this.state;

    if(account.username.trim() === '')
      errors.username = 'Username is required';
    if(account.password.trim() === '')
      errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({errors: errors || {} });

    if(errors) return;
    // call the server
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    if(name === 'username') {
      if(value.trim() === '') return 'Username is required';
    }

    if(name === 'password') {
      if(value.trim() === '') return 'Password is required';
    }
  };

  handleInputChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if(errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            value={account.username}
            onChange={this.handleInputChange}
            name="username"
            type='email'
            placeholder='Enter username'
            autoFocus={true}
            error={errors.username}
          />
          <Input
            label="Password"
            value={account.password}
            onChange={this.handleInputChange}
            name="password"
            type='password'
            placeholder='Enter password'
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

export default LoginForm;
