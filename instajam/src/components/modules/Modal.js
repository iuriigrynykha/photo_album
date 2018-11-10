import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

const Modal = ({ src, title, onClick }) => (
  <div className="modal">
    <h4>{title}</h4>
    <img src={src} alt={title} />
    <Icon
      name="close"
      size="large"
      className="close-button"
      onClick={() => onClick()}
    />
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Modal;
