import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";

import InlineError from "../messages/InlineError";

class LoginForm extends Component {
  state = {
    userId: "",
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({ userId: e.target.value });

  onSubmit = () => {
    const errors = this.validate(this.state.userId);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.userId).catch(() =>
        this.setState({
          errors: { global: "Invalid credentials" },
          loading: false
        })
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isInt(data)) errors.userId = "The User ID shoud be a number";
    if (!data) errors.userId = "Can't be blank";
    return errors;
  };

  render() {
    const { userId, loading, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.userId}>
          <label htmlFor="id">User ID</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter the ID"
            value={userId}
            onChange={this.onChange}
          />
          {errors.userId && <InlineError text={errors.userId} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
