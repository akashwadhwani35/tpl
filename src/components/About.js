import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background-color: #ffffff;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutSectionTag = styled(motion.span)`
  font-family: 'Inter', sans-serif;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6366F1;
  margin-bottom: 1rem;
`;

const AboutTitle = styled(motion.h2)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const AboutDescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const StatNumber = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
`;

const AboutVisual = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const VisualCard = styled(motion.div)`
  position: absolute;
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 450px;
`;

const CardTop = styled(VisualCard)`
  top: 0;
  right: 0;
  z-index: 2;
`;

const CardBottom = styled(VisualCard)`
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CardListItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  svg {
    margin-right: 0.75rem;
    min-width: 1.25rem;
  }
`;

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#EEF2FF" />
    <path d="M14 8L8.5 13.5L6 11" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <AboutSectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </AboutSectionTag>
          <AboutTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crafting Premium Beverages Since 2010
          </AboutTitle>
          <AboutDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TPL Beverages was founded with a singular mission: to create extraordinary drinks that elevate everyday moments. Our commitment to quality and innovation has established us as a leader in the premium beverage industry.
          </AboutDescription>
          <AboutDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We source the finest ingredients from around the world, employ sustainable practices in our manufacturing process, and continuously explore new flavors and techniques to push the boundaries of what a beverage can be.
          </AboutDescription>
          <AboutStats>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StatNumber>12+</StatNumber>
              <StatLabel>Years of Excellence</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <StatNumber>15+</StatNumber>
              <StatLabel>Premium Products</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StatNumber>30+</StatNumber>
              <StatLabel>Countries Served</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <StatNumber>1M+</StatNumber>
              <StatLabel>Happy Customers</StatLabel>
            </StatItem>
          </AboutStats>
        </AboutContent>
        
        <AboutVisual>
          <CardTop
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CardTitle>Our Commitment to Quality</CardTitle>
            <CardContent>
              We believe that exceptional beverages begin with exceptional ingredients. Our rigorous standards ensure that only the best make it into our products.
            </CardContent>
            <CardList>
              <CardListItem><CheckIcon />Sustainably sourced ingredients</CardListItem>
              <CardListItem><CheckIcon />Small-batch production</CardListItem>
              <CardListItem><CheckIcon />Eco-friendly packaging</CardListItem>
              <CardListItem><CheckIcon />No artificial preservatives</CardListItem>
            </CardList>
          </CardTop>
          <CardBottom
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardTitle>The TPL Experience</CardTitle>
            <CardContent>
              Each TPL product is designed to provide a multi-sensory experience that delights and surprises. Our beverages aren't just drinks—they're experiences.
            </CardContent>
            <CardList>
              <CardListItem><CheckIcon />Complex flavor profiles</CardListItem>
              <CardListItem><CheckIcon />Elegant, minimalist design</CardListItem>
              <CardListItem><CheckIcon />Perfect for pairing with food</CardListItem>
              <CardListItem><CheckIcon />Ideal for celebrations</CardListItem>
            </CardList>
          </CardBottom>
        </AboutVisual>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;