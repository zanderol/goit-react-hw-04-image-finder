import { Component } from 'react';
import { sendRequest } from '../service/apiService';
import { GalleryList } from './GalleryList/GalleryList';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Form } from './Form/Form';

import './styles.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
    largeImageURL: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      sendRequest(this.state.query, this.state.page)
        .then(data => {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...data.hits],
              showBtn: this.state.page < Math.ceil(data.totalHits / 12),
            };
          });
        })
        .catch()
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  setLargeImageURL = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    return (
      <>
        <Form handleSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <GalleryList
            images={this.state.images}
            setLargeImageURL={this.setLargeImageURL}
          />
        )}

        {this.state.showBtn && (
          <button type="button" onClick={this.incrementPage} className="Button">
            Load more
          </button>
        )}
        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            setLargeImageURL={this.setLargeImageURL}
          />
        )}
        {this.state.isLoading && <Loader />}
      </>
    );
  }
}
