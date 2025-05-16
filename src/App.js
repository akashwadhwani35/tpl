import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #111827;
    background-color: #ffffff;
    overflow-x: hidden;
  }
  
  img {
    max-width: 100%;
  }
  
  ::selection {
    background-color: #6366F1;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Products />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;