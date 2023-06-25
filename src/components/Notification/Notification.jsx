import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <section className={css.wrap}>
    <p className={css.message}>{message}</p>
  </section>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
