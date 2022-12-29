import '../styles.css';

export const GalleryList = ({ images, setLargeImageURL }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li
          key={image.id}
          onClick={() => setLargeImageURL(image.largeImageURL)}
          className="ImageGalleryItem"
        >
          <img
            src={image.previewURL}
            alt={image.tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </ul>
  );
};
