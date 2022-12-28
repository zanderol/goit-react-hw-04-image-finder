import { Component } from 'react';
import { sendRequest } from '../service/apiService';

import { Form } from './Form/Form';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      sendRequest(this.state.query, this.state.page).then(data => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            showBtn: this.state.page < Math.ceil(data.totalHits / 12),
          };
        });
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <>
        <Form handleSubmit={this.handleSubmit} />;
        {this.state.showBtn && (
          <button type="button" onClick={this.incrementPage}>
            Load more
          </button>
        )}
      </>
    );
  }
}
