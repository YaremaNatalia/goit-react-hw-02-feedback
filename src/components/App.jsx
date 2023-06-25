import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';


import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackMap = [
    { id: 'good', title: 'Good' },
    { id: 'neutral', title: 'Neutral' },
    { id: 'bad', title: 'Bad' },
  ];

  onLeaveFeedback = event => {
    const { name } = event.target;
    // console.log(event.target.name);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    // this.setState(prevState => ({
    //   [event.target.name]: prevState[event.target.name] + 1,
    // }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // countTotalFeedback = () => {
  //   const total = Object.values(this.state).reduce(
  //     (acc, currentValue) => acc + currentValue,
  //     0
  //   );
  //   return total;
  // };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 30,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.feedbackMap}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
          
            <Statistics
              state={this.state}
              options={this.feedbackMap}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
      
        </Section>
      </div>
    );
  }
}
