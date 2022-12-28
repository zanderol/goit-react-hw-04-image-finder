import { Component } from 'react';

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
      <form onSubmit={this.onSubmitForm}>
        <input type="text" name="" id="" onChange={this.setQuery} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
