import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  cursor: pointer;
  
  span {
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.a)`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  text-decoration: none;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
  }
`;

const MobileMenuLine = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${props => props.scrolled ? '#333' : '#fff'};
  transition: all 0.3s ease;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <Logo 
        scrolled={scrolled}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TPL<span>Beverages</span>
      </Logo>
      <MenuItems>
        <MenuItem 
          scrolled={scrolled}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#home"
        >
          Home
        </MenuItem>
        <MenuItem 
          scrolled={scrolled}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#products"
        >
          Products
        </MenuItem>
        <MenuItem 
          scrolled={scrolled}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#process"
        >
          Process
        </MenuItem>
        <MenuItem 
          scrolled={scrolled}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#about"
        >
          About
        </MenuItem>
        <MenuItem 
          scrolled={scrolled}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#contact"
        >
          Contact
        </MenuItem>
      </MenuItems>
      <MobileMenuButton>
        <MobileMenuLine scrolled={scrolled} />
        <MobileMenuLine scrolled={scrolled} />
        <MobileMenuLine scrolled={scrolled} />
      </MobileMenuButton>
    </Nav>
  );
};

export default Navbar;