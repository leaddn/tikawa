import React from 'react';

const images = [
  '/assets/images/gallery1.jpg',
  '/assets/images/gallery2.jpg',
  '/assets/images/gallery3.jpg',
];

const Gallery = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} style={{ width: '30%', borderRadius: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
