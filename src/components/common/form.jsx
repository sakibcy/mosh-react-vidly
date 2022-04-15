import Joi from "joi";
import { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    let obj = { [name]: value };
    let schema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    // call the server
    this.doSubmit();
  };

  handleInputChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({ data, errors });
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleInputChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        value={data[name]}
        onChange={this.handleInputChange}
        name={name}
        type={type}
        placeholder="Enter username"
        autoFocus={true}
        error={errors[name]}
      />
    );
  }

  renderLoginButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary m-3"
      >
        {label}
      </button>
    );
  };
}

export default Form;
