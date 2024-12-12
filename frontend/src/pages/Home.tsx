import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-new.svg';
import background from '../assets/shindengg.jpg';

const Home: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolling(scrollY > 100);
    setScrollOpacity(Math.min(scrollY / 500, 1));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Fondo Dinámico */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className='absolute inset-0 bg-cover bg-center transition-all duration-700'
      >
        <div
          style={{
            backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})`,
          }}
          className='absolute inset-0 transition-all duration-700'
        ></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${scrolling ? 'bg-black' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Botones izquierdos */}
          <div className="flex space-x-4 text-white">
            <button
              onClick={() => window.location.href = '#'}
              className="bg-transparent px-4 py-2 rounded font-bold text-white hover:text-pink-600 transition-all cursor-pointer"
            >
              SOBRE NOSOTROS
            </button>
            <button
              onClick={() => window.location.href = '#'}
              className="bg-transparent px-4 py-2 rounded font-bold text-white hover:text-pink-600 transition-all cursor-pointer"
            >
              TEAMS
            </button>
          </div>
          {/* Logo */}
          <div className="flex justify-center flex-grow">
            <img src={logo} alt="logo" className="h-12" />
          </div>
          {/* Botones derechos */}
          <div className="flex space-x-4 text-white">
            <button
              onClick={() => window.location.href = '#'}
              className="bg-transparent px-4 py-2 rounded font-bold text-white hover:text-pink-600 transition-all cursor-pointer"
            >
              CALENDARIO
            </button>
            <button
              onClick={() => window.location.href = '#'}
              className="bg-transparent px-4 py-2 rounded font-bold text-white hover:text-pink-600 transition-all cursor-pointer"
            >
              CONTACTO
            </button>
          </div>
        </div>
      </header>

      {/* Saber más */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-96">
        <button
          onClick={scrollToSection}
          className='text-white hover:text-pink-500 bg-black bg-opacity-50 px-6 py-3 rounded hover:bg-opacity-75 transition-all'
        >
          Saber más
        </button>
        <div className='mt-6 animate-bounce'>
          <span className='text-pink-600 text-4xl h-12'>▾</span>
        </div>
      </main>

      {/* Contenido  */}
      <section className='relative z-10 bg-black text-white py-20'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl mb-6'>Contenido principal</h1>
          <p>Explora más informacion sobre ShindeN</p>
          {/* Tarjetas  */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className='bg-gray-900 rounded-lg shadow-lg hover:bg-pink-600 transition-all'>
                <h2 className='text-2xl font-bold text-white mb-4'>Tarjeta {item}.</h2>
                <p className='text-white'>Contenido de la tarjeta {item}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-4 bg-black text-white text-center">
        <p>&copy; {new Date().getFullYear()} Shinden Esports. Todos los derechos reservados.</p>
      </footer>
    </div >
  );
};

export default Home;