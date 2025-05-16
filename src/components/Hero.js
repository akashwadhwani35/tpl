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
  padding: 0;
  background-color: #f5f5f7;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  z-index: 1;
  
  @media (max-width: 992px) {
    padding: 2rem;
    text-align: center;
    align-items: center;
    grid-row: 1;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeroImageContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  
  @media (max-width: 992px) {
    grid-row: 2;
    height: 50vh;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroHeading = styled(motion.h1)`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #1d1d1f;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  
  span {
    background: linear-gradient(90deg, #06c, #0091f8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 400;
  color: #86868b;
  max-width: 500px;
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButton = styled(motion.button)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #06c;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 980px;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #0077ed;
  }
  
  @media (max-width: 992px) {
    align-self: center;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background: linear-gradient(to top, #f5f5f7, transparent);
  z-index: 2;
  pointer-events: none;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroGrid>
        <HeroContent>
          <HeroHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting <span>Premium</span> Beverage Experiences
          </HeroHeading>
          <HeroSubheading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meticulously crafted premium beverages with exceptional quality and innovative flavors that redefine industry standards.
          </HeroSubheading>
          <HeroButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
          </HeroButton>
        </HeroContent>
        <HeroImageContainer>
          <HeroImg src={heroImage} alt="Premium beverage" />
        </HeroImageContainer>
      </HeroGrid>
      <GradientOverlay />
    </HeroSection>
  );
};

export default Hero;