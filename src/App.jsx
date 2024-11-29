import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const onLeaveFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Feedback App</h1>
      <div className={styles.feedbackWrapper}>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
            onLeaveFeedback={onLeaveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </div>
  );
};

export default App;
