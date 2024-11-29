import PropTypes from "prop-types";
import "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className="notification">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
