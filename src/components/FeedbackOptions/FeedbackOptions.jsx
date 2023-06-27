import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option} className={css.feedbackItem}>
          <button
            name={option}
            type="button"
            onClick={onLeaveFeedback}
            className={css.feedbackButton}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
