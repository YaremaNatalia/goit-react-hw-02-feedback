import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from 'components/Notification';

export const Statistics = ({ state, options, total, positivePercentage }) => {
  const totalFeedback = total();
  const Percentage = positivePercentage();
  return (
    <>
      <h3 className={css.headingStatistics}>Statistics</h3>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <ul className={css.statisticsList}>
            {options.map(option => (
              <li key={option.id} className={css.feedbackInfo}>
                <p className={css.feedbackTitle}>{option.title}:</p>
                <span className={css.feedbackValue}>{state[option.id]}</span>
              </li>
            ))}
            <li className={css.feedbackInfo}>
              <p className={css.feedbackTitle}>Total:</p>
              <span className={css.feedbackValue}>{totalFeedback}</span>
            </li>
            <li className={css.feedbackInfo}>
              <p className={css.feedbackTitle}>Positive feedback:</p>
              <span className={css.feedbackValue}>{Percentage}%</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};
Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
