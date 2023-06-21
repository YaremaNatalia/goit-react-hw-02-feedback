// import PropTypes from 'prop-types';
import css from './FeedbackWidget.module.css';

import { Component } from 'react';

const feedbackMap = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
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
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.wrap}>
        <h2 className={css.heading}>Please leave feedback</h2>
        <ul className={css.feedbackList}>
          {feedbackMap.map(feedback => (
            <li key={feedback.id} className={css.feedbackItem}>
              <button
                name={feedback.id}
                type="button"
                onClick={this.handleClick}
                className={css.feedbackButton}
              >
                {feedback.title}
              </button>
            </li>
          ))}
        </ul>

        <h2 className={css.statistics}>Statistics</h2>
        <ul className={css.statisticsList}>
          {feedbackMap.map(feedback => (
            <li key={feedback.id} className={css.feedbackInfo}>
              <p className={css.feedbackTitle}>{feedback.title}:</p>
              <span className={css.feedbackValue}>
                {this.state[feedback.id]}
              </span>
            </li>
          ))}
          <li className={css.feedbackInfo}>
            <p className={css.feedbackTitle}>Total:</p>
            <span className={css.feedbackValue}>{totalFeedback}</span>
          </li>
          <li className={css.feedbackInfo}>
            <p className={css.feedbackTitle}>Positive feedback:</p>
            <span className={css.feedbackValue}>{positivePercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}
