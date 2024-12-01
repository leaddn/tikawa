import { Container } from "@mui/material";
import React from "react";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number; // Rating out of 5
}

const reviews: Review[] = [
  { id: 1, name: "Alice", text: "The coffee here is absolutely amazing!", rating: 5 },
  { id: 2, name: "Bob", text: "Cozy place and great service.", rating: 4 },
  { id: 3, name: "Charlie", text: "I love the pastries here. Highly recommend!", rating: 5 },
];

const Reviews: React.FC = () => {
  return (
    <Container className="p-6">
      <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-bold">{review.name}</h2>
            <p className="text-brown-700">{review.text}</p>
            <div className="mt-2">
              {"⭐".repeat(review.rating)}{" "}
              <span className="text-sm text-gray-500">({review.rating}/5)</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;
