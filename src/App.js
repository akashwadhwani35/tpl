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
  @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&family=SF+Pro+Text:wght@300;400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1d1d1f;
    background-color: #ffffff;
    overflow-x: hidden;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: -0.015em;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
  
  a {
    text-decoration: none;
    color: #0066cc;
    transition: color 0.2s ease;
    
    &:hover {
      color: #0077ed;
    }
  }
  
  button {
    font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
    cursor: pointer;
  }
  
  ::selection {
    background-color: #0066cc;
    color: white;
  }
  
  section {
    padding: 80px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    section {
      padding: 60px 0;
    }
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