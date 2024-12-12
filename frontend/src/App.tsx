import React, { useEffect, useState } from 'react';
import Loader from './components/Loader'
import Home from './pages/Home';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000');
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Home />;
};

export default App