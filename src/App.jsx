import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

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
    <div>
      <h1>Feedback App</h1>
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
  );
};

export default App;
