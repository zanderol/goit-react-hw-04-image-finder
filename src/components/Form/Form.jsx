import { Component } from 'react';

import '../styles.css';

export class Form extends Component {
  state = {
    query: '',
  };

  setQuery = event => {
    this.setState({ query: event.target.value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    if (!this.state.query) {
      return;
    }
    this.props.handleSubmit(this.state.query);
    event.target.reset();
  };

  render() {
    return (
      //   <form onSubmit={this.onSubmitForm}>
      //     <input type="text" name="" id="" onChange={this.setQuery} />
      //     <button type="submit">Submit</button>
      //     </form>

      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.setQuery}
          />
        </form>
      </header>
    );
  }
}
