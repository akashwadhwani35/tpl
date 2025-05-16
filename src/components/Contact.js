import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 120px 24px;
  background-color: #fff;
`;

const ContactContainer = styled.div`
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactFormContainer = styled(motion.div)`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
`;

const ContactForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 30px 24px;
  }
`;

const FormTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
`;

const InputLabel = styled.label`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: block;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #1d1d1f;
  margin-bottom: 8px;
`;

const TextInput = styled.input`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d2d2d7;
  border-radius: 10px;
  font-size: 1rem;
  color: #1d1d1f;
  background-color: #fff;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
  }
  
  &::placeholder {
    color: #86868b;
  }
`;

const TextArea = styled.textarea`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d2d2d7;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  color: #1d1d1f;
  resize: vertical;
  background-color: #fff;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.1);
  }
  
  &::placeholder {
    color: #86868b;
  }
`;

const SubmitButton = styled.button`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #0066cc;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 12px 24px;
  border: none;
  border-radius: 980px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
  align-self: flex-start;
  
  &:hover {
    background-color: #0077ed;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const ContactInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactInfoCard = styled.div`
  background-color: #f5f5f7;
  border-radius: 20px;
  padding: 32px;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const InfoTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
  letter-spacing: -0.01em;
`;

const InfoItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.div`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #86868b;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

const InfoValue = styled.div`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  color: #1d1d1f;
  line-height: 1.4;
`;

const SocialContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const SocialTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
  letter-spacing: -0.01em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #f5f5f7;
  transition: all 0.2s ease;
  color: #1d1d1f;
  
  &:hover {
    background-color: #e5e5ea;
    transform: translateY(-2px);
    
    svg {
      color: #0066cc;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: color 0.2s ease;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions or interested in our products? We'd love to hear from you.
          </SectionSubtitle>
        </SectionHeader>
        
        <ContactWrapper>
          <ContactFormContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm>
              <FormTitle>Send Us a Message</FormTitle>
              <InputGroup>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextInput id="name" type="text" placeholder="Your name" />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextInput id="email" type="email" placeholder="you@example.com" />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="subject">Subject</InputLabel>
                <TextInput id="subject" type="text" placeholder="How can we help?" />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="message">Message</InputLabel>
                <TextArea id="message" placeholder="Tell us more about your inquiry..." />
              </InputGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactFormContainer>
          
          <ContactInfoContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfoCard>
              <InfoTitle>Contact Information</InfoTitle>
              <InfoItem>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>123 Beverage Avenue<br />San Francisco, CA 94103</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>hello@tplbeverages.com</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>+1 (415) 555-0123</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Hours</InfoLabel>
                <InfoValue>Monday – Friday: 9AM – 5PM<br />Saturday: By appointment</InfoValue>
              </InfoItem>
            </ContactInfoCard>
            
            <SocialContainer>
              <SocialTitle>Follow Us</SocialTitle>
              <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </SocialContainer>
          </ContactInfoContainer>
        </ContactWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;