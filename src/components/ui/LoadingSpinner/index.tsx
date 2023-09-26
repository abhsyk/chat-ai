import { FC } from 'react';

const LoadingSpinner: FC = () => {
  return (
    <div className="overlay">
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;
