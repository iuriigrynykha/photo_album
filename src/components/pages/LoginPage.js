import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
import { albumsAPI } from "../../actions/albums";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  submit = data =>
    this.props
      .albumsAPI(data)
      .then(() => this.props.login(data))
      .then(() => <Redirect to="/dashboard" />);

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
  albumsAPI: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};

export default connect(
  mapStateToProps,
  { login, albumsAPI }
)(LoginPage);
