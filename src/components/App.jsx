import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';

export const App = () => {
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
      <FeedbackWidget />
    </div>
  );
};
