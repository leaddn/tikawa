import React from 'react';

const menuItems = [
  { name: 'Espresso', price: '$3' },
  { name: 'Cappuccino', price: '$4' },
  { name: 'Latte', price: '$4.5' },
  { name: 'Mocha', price: '$5' },
  { name: 'Pastries', price: 'from $2' },
];

const Menu = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Menu</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
