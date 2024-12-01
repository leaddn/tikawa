import { Container } from "@mui/material";
import React from "react";

const galleryImages = [
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/shop1.jpg",
  "/images/shop2.jpg",
];

const Gallery: React.FC = () => {
  return (
    <Container className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
