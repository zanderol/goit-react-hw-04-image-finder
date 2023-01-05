import { useState, useEffect } from 'react';
import { sendRequest } from '../service/apiService';
import { GalleryList } from './GalleryList/GalleryList';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Form } from './Form/Form';

import './styles.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [images, setImages] = useState([]);
  const [showBtn, setBtn] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    sendRequest(query, page)
      .then(data => {
        setImages(prevState => [...prevState, ...data.hits]);
        setBtn(page < Math.ceil(data.totalHits / 12));
      })
      .catch()
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLargeImageURL('');
    setBtn(false);
    setIsLoading(false);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const increasedLargeImageURL = largeImg => {
    setLargeImageURL(largeImg);
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      {images.length > 0 && (
        <GalleryList
          images={images}
          increasedLargeImageURL={increasedLargeImageURL}
        />
      )}

      {showBtn && (
        <button type="button" onClick={incrementPage} className="Button">
          Load more
        </button>
      )}
      {largeImageURL && (
        <Modal
          largeImageURL={largeImageURL}
          increasedLargeImageURL={increasedLargeImageURL}
        />
      )}
      {isLoading && <Loader />}
    </>
  );
};
