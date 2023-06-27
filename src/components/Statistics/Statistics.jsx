import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.feedbackInfo}>
        <p className={css.feedbackTitle}>Good:</p>
        <span className={css.feedbackValue}>{good}</span>
      </li>
      <li className={css.feedbackInfo}>
        <p className={css.feedbackTitle}>Neutral:</p>
        <span className={css.feedbackValue}>{neutral}</span>
      </li>
      <li className={css.feedbackInfo}>
        <p className={css.feedbackTitle}>Bad:</p>
        <span className={css.feedbackValue}>{bad}</span>
      </li>
      <li className={css.feedbackInfo}>
        <p className={css.feedbackTitle}>Total:</p>
        <span className={css.feedbackValue}>{total}</span>
      </li>
      <li className={css.feedbackInfo}>
        <p className={css.feedbackTitle}>Positive feedback:</p>
        <span className={css.feedbackValue}>{positivePercentage} %</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
