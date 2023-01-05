import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles.css';

export const Form = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const onSubmitForm = event => {
    event.preventDefault();
    if (!query) {
      return;
    }
    handleSubmit(query);
    event.target.reset();
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </form>
    </header>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
