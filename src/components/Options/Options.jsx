import PropTypes from "prop-types";
import "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={`btn btn-${option}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={onReset} className="btn btn-reset">
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
