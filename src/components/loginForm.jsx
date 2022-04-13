import React, { Component } from "react";
import Input from "./common/input";

import Joi from "joi";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = Joi.object({
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  });

  // username = React.createRef();

  // componentDidMount() {
  //     this.username.current.focus();
  // }

  validate = () => {
    const options = {abortEarly: false};
    const {error} = this.schema.validate(this.state.account, options);
    
    if(!error) return null;

    const errors = {};
    for(let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({errors: errors || {} });

    if(errors) return;
    // call the server
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    let obj = {[name]: value};
    let schema = Joi.object({ [name]: this.schema.extract(name) });
    const {error} = schema.validate(obj);
    return error ? error.details[0].message : null;

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

          <button disabled={this.validate()} type="submit" className="btn btn-primary m-3">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

export default LoginForm;
