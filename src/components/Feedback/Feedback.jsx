import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className={styles.feedback}>
    <h2>Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Feedback;

