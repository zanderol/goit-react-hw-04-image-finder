import '../styles.css';

export const GalleryList = ({ images, increasedLargeImageURL }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li
          key={image.id}
          onClick={() => increasedLargeImageURL(image.largeImageURL)}
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
