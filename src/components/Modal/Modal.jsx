import { Component } from 'react';

import '../styles.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.setLargeImageURL('');
    }
  };

  onEscape = event => {
    if (event.code === 'Escape') {
      this.props.setLargeImageURL('');
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
