import { Container } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container className="text-center p-10 bg-gradient-to-b from-brown-100 to-brown-200">
      <h1 className="text-4xl font-bold text-brown-900 mb-4">Welcome to Tikawa</h1>
      <p className="text-lg text-brown-700">Experience the finest coffee in town.</p>
      <img
        src="/images/coffee-shop.jpg"
        alt="Tikawa Coffee Shop"
        className="mt-8 mx-auto rounded-lg shadow-lg w-3/4"
      />
    </Container>
  );
};

export default Home;