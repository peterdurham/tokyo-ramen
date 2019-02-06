import React from "react";
import PropTypes from "prop-types";
import "../sass/main.scss";

const Backdrop = ({ show, clicked }) =>
  show && <div className="Backdrop" onClick={clicked} />;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};
export default Backdrop;
