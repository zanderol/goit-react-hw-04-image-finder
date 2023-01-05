import { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles.css';

export const Modal = ({ largeImageURL, increasedLargeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        increasedLargeImageURL();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [increasedLargeImageURL]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      increasedLargeImageURL();
    }
  };

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  increasedLargeImageURL: PropTypes.func.isRequired,
};
