import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero.jpg';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroHeading = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const HeroButton = styled(motion.button)`
  font-family: 'Inter', sans-serif;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroBackground>
        <HeroImage src={heroImage} alt="Premium beverage" />
      </HeroBackground>
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your <span>Beverage</span> Experience
        </HeroHeading>
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TPL Beverages crafts premium drinks using only the finest ingredients,
          delivering unparalleled taste and quality that sets a new standard in the industry.
        </HeroSubheading>
        <HeroButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Products
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;