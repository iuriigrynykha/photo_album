import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Greeting = ({ userName }) => {
  return (
    <div>
      <h1>Welcome, {userName}!</h1>
    </div>
  );
};

Greeting.propTypes = {
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.user.name
  };
};

export default connect(mapStateToProps)(Greeting);
