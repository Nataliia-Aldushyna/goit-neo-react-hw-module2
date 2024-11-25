import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";
import {
  getInitialFeedback,
  calcFeedbackTotal,
  calcFeedbackPositive,
} from "./helpers/feedback";
import { defaultFeedback, FEEDBACK_KEY } from "../feedback.config";
import Container from "./components/Container/Container";

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);
  const totalFeedback = calcFeedbackTotal(feedback);
  const positiveFeedback = calcFeedbackPositive(feedback);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        ...defaultFeedback,
      });
      return;
    }
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
  }, [feedback]);

  return (
    <Container>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
