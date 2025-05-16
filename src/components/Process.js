import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessSection = styled.section`
  padding: 8rem 2rem;
  background-color: #f3f4f6;
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
`;

const StepTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
`;

const ProcessDiagram = styled(motion.div)`
  margin: 5rem auto;
  max-width: 900px;
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const ProcessFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FlowStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  flex: 1;

  &:not(:last-child):after {
    content: '→';
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #6366F1;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const FlowIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #6366F1;
`;

const FlowTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const FlowDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
`;

const Process = () => {
  return (
    <ProcessSection id="process">
      <ProcessContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We follow a meticulous process to ensure quality and satisfaction at every step of your beverage journey
          </SectionSubtitle>
        </SectionHeader>
        
        <ProcessSteps>
          <ProcessStep
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StepNumber>1</StepNumber>
            <StepTitle>Consultation</StepTitle>
            <StepDescription>
              We begin with an in-depth consultation to understand your vision, requirements, and goals for your beverage product.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StepNumber>2</StepNumber>
            <StepTitle>Research & Development</StepTitle>
            <StepDescription>
              Our expert team develops custom formulations, conducts tastings, and refines the product until it meets our high standards.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StepNumber>3</StepNumber>
            <StepTitle>Production</StepTitle>
            <StepDescription>
              Using premium ingredients and state-of-the-art facilities, we produce your beverage with meticulous attention to quality control.
            </StepDescription>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StepNumber>4</StepNumber>
            <StepTitle>Delivery & Support</StepTitle>
            <StepDescription>
              We handle packaging, logistics, and provide ongoing support to ensure your complete satisfaction with the final product.
            </StepDescription>
          </ProcessStep>
        </ProcessSteps>
        
        <ProcessDiagram
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ProcessFlow>
            <FlowStep>
              <FlowIcon>💡</FlowIcon>
              <FlowTitle>Ideation</FlowTitle>
              <FlowDescription>Concept development and market research</FlowDescription>
            </FlowStep>
            
            <FlowStep>
              <FlowIcon>🧪</FlowIcon>
              <FlowTitle>Formulation</FlowTitle>
              <FlowDescription>Recipe development and testing</FlowDescription>
            </FlowStep>
            
            <FlowStep>
              <FlowIcon>🏭</FlowIcon>
              <FlowTitle>Production</FlowTitle>
              <FlowDescription>Manufacturing and quality assurance</FlowDescription>
            </FlowStep>
            
            <FlowStep>
              <FlowIcon>📦</FlowIcon>
              <FlowTitle>Distribution</FlowTitle>
              <FlowDescription>Packaging, shipping, and delivery</FlowDescription>
            </FlowStep>
          </ProcessFlow>
        </ProcessDiagram>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default Process;