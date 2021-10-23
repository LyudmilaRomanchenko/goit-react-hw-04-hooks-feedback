import React from 'react';
// import s from './Feedback.module.css';
import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = name => {
    // console.log(this.state[name]);
    if (name === 'good') {
      return setGood(state => state + 1);
    }
    if (name === 'neutral') {
      return setNeutral(state => state + 1);
    }
    if (name === 'bad') {
      return setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    console.log(total);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (good * 100) / (good + neutral + bad),
    );
    return positivePercentage;
  };

  return (
    <div>
      <Section title="Please leaven feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
