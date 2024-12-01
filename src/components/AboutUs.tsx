import React, { useRef, useEffect } from 'react';
import { Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Container>
      <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s' }}>
        <h2>About Us</h2>
        <p>
          Tikawa is more than just a coffee shop. It's a place where coffee lovers unite, stories are shared, and memories are brewed.
          We source the finest beans and craft each cup with love.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
