import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 120px 24px;
  background-color: #f5f5f7;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  color: #86868b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const StoryContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const StoryTag = styled(motion.span)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #0066cc;
  margin-bottom: 16px;
`;

const StoryTitle = styled(motion.h3)`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

const StoryText = styled(motion.p)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  color: #86868b;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
`;

const StatItem = styled(motion.div)`
  padding: 24px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.04);
  }
`;

const StatNumber = styled.div`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #0066cc;
  line-height: 1;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9375rem;
  color: #86868b;
  font-weight: 500;
`;

const ValuesContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const ValuesCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
`;

const ValuesTitle = styled.h4`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
`;

const ValuesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ValuesItem = styled.li`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9375rem;
  color: #86868b;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f7;
  display: flex;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  svg {
    margin-right: 12px;
    color: #0066cc;
    flex-shrink: 0;
  }
`;

const ValuesHighlight = styled.div`
  background: linear-gradient(120deg, #f2f2f7, #e5e5ea);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
`;

const ValuesHighlightTitle = styled.h4`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
`;

const ValuesHighlightText = styled.p`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9375rem;
  color: #86868b;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const CircleBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #0066cc;
  color: white;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 100px;
  margin-top: 8px;
`;

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About TPL Beverages
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting extraordinary drinks that elevate everyday moments
          </SectionSubtitle>
        </SectionHeader>
        
        <ContentGrid>
          <StoryContent>
            <StoryTag
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </StoryTag>
            <StoryTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crafting Premium Beverages Since 2010
            </StoryTitle>
            <StoryText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              TPL Beverages was founded with a singular mission: to create extraordinary drinks that elevate everyday moments. Our commitment to quality and innovation has established us as a leader in the premium beverage industry.
            </StoryText>
            <StoryText
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              We source the finest ingredients from around the world, employ sustainable practices in our manufacturing process, and continuously explore new flavors and techniques to push the boundaries of what a beverage can be.
            </StoryText>
            
            <StatsGrid>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <StatNumber>12+</StatNumber>
                <StatLabel>Years of Excellence</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatNumber>15+</StatNumber>
                <StatLabel>Premium Products</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <StatNumber>30+</StatNumber>
                <StatLabel>Countries Served</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <StatNumber>1M+</StatNumber>
                <StatLabel>Happy Customers</StatLabel>
              </StatItem>
            </StatsGrid>
          </StoryContent>
          
          <ValuesContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ValuesCard>
              <ValuesTitle>Our Commitment to Quality</ValuesTitle>
              <ValuesList>
                <ValuesItem><CheckIcon />Sustainably sourced ingredients</ValuesItem>
                <ValuesItem><CheckIcon />Small-batch production methods</ValuesItem>
                <ValuesItem><CheckIcon />Eco-friendly packaging solutions</ValuesItem>
                <ValuesItem><CheckIcon />Zero artificial preservatives</ValuesItem>
              </ValuesList>
            </ValuesCard>
            
            <ValuesHighlight>
              <ValuesHighlightTitle>The TPL Experience</ValuesHighlightTitle>
              <ValuesHighlightText>
                Each TPL product is designed to provide a multi-sensory experience that delights and surprises. Our beverages aren't just drinks — they're experiences crafted for moments of enjoyment and connection.
              </ValuesHighlightText>
              <CircleBadge>Learn more about our process</CircleBadge>
            </ValuesHighlight>
          </ValuesContainer>
        </ContentGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;