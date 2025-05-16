import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, #f3f4f6, #ffffff);
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const TextInput = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #111827;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  min-height: 120px;
  color: #111827;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const SubmitButton = styled.button`
  font-family: 'Inter', sans-serif;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  margin-top: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }
`;

const ContactInfo = styled(motion.div)`
  padding: 3rem;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  display: flex;
  flex-direction: column;
  color: white;
`;

const InfoTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const InfoText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const ContactDetailsWrapper = styled.div`
  margin-top: auto;
`;

const ContactDetailsTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 1rem;
    min-width: 1.25rem;
  }
`;

const DetailText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
`;

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33333C16.6667 4.65144 13.6819 1.66667 10 1.66667C6.31811 1.66667 3.33334 4.65144 3.33334 8.33333C3.33334 12.0152 6.66668 15 10 18.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 6.66667L9.0755 11.0494C9.63533 11.4384 10.3647 11.4384 10.9245 11.0494L17.5 6.66667M4.16667 16.6667H15.8333C16.7538 16.6667 17.5 15.9205 17.5 15V5C17.5 4.07953 16.7538 3.33333 15.8333 3.33333H4.16667C3.24619 3.33333 2.5 4.07953 2.5 5V15C2.5 15.9205 3.24619 16.6667 4.16667 16.6667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H7.30417C7.56343 2.5 7.79768 2.66395 7.88144 2.90982L9.31644 7.21532C9.40921 7.48515 9.29912 7.78742 9.04834 7.93834L7.20334 9.16C8.25311 11.3214 10.0119 13.0802 12.1733 14.13L13.395 12.285C13.5459 12.0342 13.8482 11.9241 14.118 12.0169L18.4235 13.4519C18.6694 13.5356 18.8333 13.7699 18.8333 14.0292V17.1667C18.8333 18.0871 18.0871 18.8333 17.1667 18.8333H15.8333C8.46917 18.8333 2.5 12.8642 2.5 5.5V4.16667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
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
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or interested in our products? We'd love to hear from you. Reach out to our team for inquiries, partnerships, or just to say hello.
          </SectionSubtitle>
        </SectionHeader>
        
        <ContactWrapper>
          <ContactForm
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Send Us a Message</FormTitle>
            <InputGroup>
              <InputLabel htmlFor="name">Full Name</InputLabel>
              <TextInput id="name" type="text" placeholder="Your name" />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <TextInput id="email" type="email" placeholder="Your email" />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <TextInput id="subject" type="text" placeholder="How can we help?" />
            </InputGroup>
            <InputGroup>
              <InputLabel htmlFor="message">Message</InputLabel>
              <TextArea id="message" placeholder="Your message..." />
            </InputGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          
          <ContactInfo
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            <InfoText>
              Feel free to reach out to us using the contact information below. Our team is available Monday through Friday from 9 AM to 5 PM.
            </InfoText>
            
            <ContactDetailsWrapper>
              <ContactDetailsTitle>Reach Us</ContactDetailsTitle>
              <ContactDetail>
                <LocationIcon />
                <DetailText>123 Beverage Avenue, San Francisco, CA 94103</DetailText>
              </ContactDetail>
              <ContactDetail>
                <EmailIcon />
                <DetailText>hello@tplbeverages.com</DetailText>
              </ContactDetail>
              <ContactDetail>
                <PhoneIcon />
                <DetailText>+1 (415) 555-0123</DetailText>
              </ContactDetail>
              
              <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 1.66667H13.3333C11.4421 1.66667 9.62791 2.3869 8.28265 3.73215C6.9374 5.0774 6.21716 6.89162 6.21716 8.78287V12.1162H2.88382V16.6667H6.21716V25.7857H10.7676V16.6667H14.1009L15.2676 12.1162H10.7676V8.78287C10.7676 8.35087 10.9379 7.93693 11.241 7.6339C11.544 7.33086 11.9579 7.16055 12.3899 7.16055H16.6667V1.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 2.5C16.8631 3.14025 16.1247 3.66356 15.3158 4.04487C14.8738 3.53493 14.2879 3.16209 13.6371 2.97225C12.9863 2.78241 12.2968 2.78344 11.6468 2.97523C10.9967 3.16702 10.4118 3.5416 9.97124 4.05276C9.53068 4.56392 9.25537 5.1927 9.18333 5.86C7.96774 5.73502 6.79309 5.36256 5.72777 4.7647C4.66245 4.16684 3.73212 3.35693 3 2.38333C3 2.38333 0.166667 10.8333 8.33333 14.5833C6.90336 15.5406 5.22889 16.0388 3.51667 16.0167C11.6833 20.5833 21.6667 14.5833 21.6667 5.81667C21.6658 5.6122 21.6476 5.40806 21.6125 5.20667C20.9177 3.87013 19.8317 2.79355 18.5 2.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1667 1.66667H5.83333C3.53215 1.66667 1.66667 3.53215 1.66667 5.83333V14.1667C1.66667 16.4679 3.53215 18.3333 5.83333 18.3333H14.1667C16.4679 18.3333 18.3333 16.4679 18.3333 14.1667V5.83333C18.3333 3.53215 16.4679 1.66667 14.1667 1.66667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 9.47501C13.4362 10.1685 13.3177 10.8769 12.9948 11.4992C12.6719 12.1215 12.161 12.6262 11.5344 12.9414C10.9077 13.2566 10.1987 13.3663 9.50648 13.2549C8.81427 13.1436 8.17481 12.8167 7.67903 12.321C7.18324 11.8252 6.85636 11.1857 6.74502 10.4935C6.63368 9.8013 6.74337 9.09228 7.05852 8.46561C7.37368 7.83894 7.87841 7.32801 8.50072 7.00511C9.12302 6.68221 9.83138 6.56373 10.525 6.66667C11.2324 6.77158 11.8874 7.10123 12.393 7.60682C12.8986 8.11241 13.2283 8.76757 13.3333 9.47501Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5833 5.41667H14.5917" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 6.66667C14.6594 6.66667 15.9312 7.19346 16.8689 8.13115C17.8066 9.06885 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.0036 14.7366 10.3677 14.2678 9.89896C13.7989 9.43018 13.163 9.16667 12.5 9.16667C11.837 9.16667 11.2011 9.43018 10.7322 9.89896C10.2634 10.3677 10 11.0036 10 11.6667V17.5H6.66667V11.6667C6.66667 10.3406 7.19345 9.06885 8.13115 8.13115C9.06884 7.19346 10.3406 6.66667 11.6667 6.66667H13.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.16667 7.5H0.833336V17.5H4.16667V7.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 5C3.32843 5 4 4.32843 4 3.5C4 2.67157 3.32843 2 2.5 2C1.67157 2 1 2.67157 1 3.5C1 4.32843 1.67157 5 2.5 5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </ContactDetailsWrapper>
          </ContactInfo>
        </ContactWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;