import React from 'react';

const reviews = [
  { name: 'John Doe', comment: 'Amazing coffee and ambiance!', rating: 5 },
  { name: 'Jane Smith', comment: 'Loved the pastries. Highly recommend!', rating: 4.5 },
];

const Review = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Customer Reviews</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reviews.map((review, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <p><strong>{review.name}</strong></p>
            <p>"{review.comment}"</p>
            <p>Rating: {review.rating} / 5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
