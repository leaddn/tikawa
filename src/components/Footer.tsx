import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Tikawa Coffee Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;