import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Container, Grid2, Typography } from '@mui/material';

const menuItems = [
  { name: 'Espresso', price: '$3' },
  { name: 'Cappuccino', price: '$4' },
  { name: 'Latte', price: '$4.5' },
  { name: 'Mocha', price: '$5' },
  { name: 'Pastries', price: 'from $2' },
];

const Menu = ({ name, price }) => {
  const [hovered, setHovered] = React.useState(false);
  const styles = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 200, friction: 12 }
  });

  return (
    <Container>
      <Box>
        <Typography variant='h2' gutterBottom display="inline">Our Menu</Typography>
      </Box>
      <Grid2 container spacing={6} direction="row">
        {menuItems.map((item, index) => (
          <animated.div
          menu-item
          key={index} 
          style={styles}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          //style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}
          >
          <Box>
            <Typography variant='h3'>
            {item.name}
            </Typography>
          </Box>
          <Box>{item.price}</Box>
         </animated.div>

        ))}
      </Grid2>
    </Container>
  );
};

export default Menu;
