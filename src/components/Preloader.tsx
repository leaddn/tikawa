import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching resources, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (!loading) {
    return null; // If not loading, don't render the preloader
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-brown-800 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Tikawa Coffee Shop</h1>
        <p className="text-lg">Brewing your experience...</p>
        <div className="mt-6">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;