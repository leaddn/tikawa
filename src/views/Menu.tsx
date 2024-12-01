import React from "react";
import { MenuItem } from "../types/Menu";
import { Container } from "@mui/material";

const menuItems: MenuItem[] = [
  { id: 1, name: "Espresso", description: "Rich and creamy espresso shot.", price: 2.5 },
  { id: 2, name: "Latte", description: "Smooth latte with steamed milk.", price: 3.5 },
];

const Menu: React.FC = () => {
  return (
    <Container className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-4">
            <h2 className="text-xl font-bold">{item.name} - ${item.price.toFixed(2)}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menu;
