import React from 'react';
import { motion } from 'framer-motion';

/*
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };
  */

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ textAlign: 'center', padding: '2rem' }}
      className="text-center p-10 bg-gradient-to-b from-brown-100 to-brown-200"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-brown-900 mb-4">Welcome to Tikawa Coffee Shop</motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-brown-700">Where every sip tells a story.</motion.p>
      <img src="/assets/images/coffee-home.jpg" alt="Tikawa Coffee" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
    </motion.div>
  );
};

export default Home;
