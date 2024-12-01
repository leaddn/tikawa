import { Container } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <Container className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-brown-700">
        Tikawa Coffee Shop was founded to bring the best coffee experience to our community. With freshly roasted beans and carefully crafted brews, we aim to make every cup a moment to savor.
      </p>
    </Container>
  );
};

export default About;