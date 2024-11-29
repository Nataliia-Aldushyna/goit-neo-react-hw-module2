import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage, onLeaveFeedback }) => {
  return (
    <div className={styles.container}>
      <h2>Leave your feedback</h2>
      <div className={styles.buttons}>
        {Object.keys(feedback).map((option) => (
          <button
            key={option}
            className={styles.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <h2>Statistics</h2>
      <ul className={styles.stats}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
