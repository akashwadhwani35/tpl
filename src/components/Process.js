import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessSection = styled.section`
  padding: 120px 24px;
  background-color: #fff;
  overflow: hidden;
`;

const ProcessContainer = styled.div`
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

const ProcessStepsWrapper = styled.div`
  position: relative;
  padding-top: 40px;
  
  &:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 50%;
    width: 1px;
    height: calc(100% - 120px);
    background-color: #e5e5ea;
    z-index: 0;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  position: relative;
  z-index: 1;
`;

const ProcessStep = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  
  &:nth-child(even) {
    direction: rtl;
    
    & > * {
      direction: ltr;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const StepContent = styled.div`
  padding: 20px;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0066cc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StepTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`;

const StepDescription = styled.p`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  color: #86868b;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const StepVisual = styled(motion.div)`
  background-color: #f5f5f7;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  
  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

const LearnMoreLink = styled.a`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: inline-flex;
  align-items: center;
  color: #0066cc;
  font-weight: 500;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: color 0.2s ease;
  
  svg {
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: #0077ed;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Process = () => {
  return (
    <ProcessSection id="process">
      <ProcessContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We follow a meticulous process to ensure quality and satisfaction at every step of your beverage journey
          </SectionSubtitle>
        </SectionHeader>
        
        <ProcessStepsWrapper>
          <ProcessSteps>
            <ProcessStep
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StepContent>
                <StepNumber>1</StepNumber>
                <StepTitle>Consultation</StepTitle>
                <StepDescription>
                  We begin with an in-depth consultation to understand your vision, requirements, and goals for your beverage product. Our team of experts works closely with you to define your needs.
                </StepDescription>
                <LearnMoreLink href="#consultation">
                  Learn more <ArrowIcon />
                </LearnMoreLink>
              </StepContent>
              <StepVisual
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                💬
              </StepVisual>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StepContent>
                <StepNumber>2</StepNumber>
                <StepTitle>Research & Development</StepTitle>
                <StepDescription>
                  Our expert team develops custom formulations, conducts tastings, and refines the product until it meets our high standards and aligns perfectly with your brand vision.
                </StepDescription>
                <LearnMoreLink href="#research">
                  Learn more <ArrowIcon />
                </LearnMoreLink>
              </StepContent>
              <StepVisual
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                🧪
              </StepVisual>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StepContent>
                <StepNumber>3</StepNumber>
                <StepTitle>Production</StepTitle>
                <StepDescription>
                  Using premium ingredients and state-of-the-art facilities, we produce your beverage with meticulous attention to quality control and adherence to the highest industry standards.
                </StepDescription>
                <LearnMoreLink href="#production">
                  Learn more <ArrowIcon />
                </LearnMoreLink>
              </StepContent>
              <StepVisual
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                🏭
              </StepVisual>
            </ProcessStep>
            
            <ProcessStep
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StepContent>
                <StepNumber>4</StepNumber>
                <StepTitle>Delivery & Support</StepTitle>
                <StepDescription>
                  We handle packaging, logistics, and provide ongoing support to ensure your complete satisfaction with the final product and help you navigate the market successfully.
                </StepDescription>
                <LearnMoreLink href="#delivery">
                  Learn more <ArrowIcon />
                </LearnMoreLink>
              </StepContent>
              <StepVisual
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                📦
              </StepVisual>
            </ProcessStep>
          </ProcessSteps>
        </ProcessStepsWrapper>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process;