import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #111827;
  color: #fff;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterLogo = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  span {
    background: linear-gradient(90deg, #6366F1, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const FooterLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
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

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottomLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterColumn>
            <FooterLogo>
              TPL<span>Beverages</span>
            </FooterLogo>
            <FooterDescription>
              Creating premium beverages for the most discerning palates. Elevate your drinking experience with TPL.
            </FooterDescription>
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
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Products</ColumnTitle>
            <FooterLink href="#products">Sparkling Water</FooterLink>
            <FooterLink href="#products">Botanical Elixirs</FooterLink>
            <FooterLink href="#products">Craft Sodas</FooterLink>
            <FooterLink href="#products">Limited Editions</FooterLink>
            <FooterLink href="#products">Gift Sets</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#about">Our Story</FooterLink>
            <FooterLink href="#">Sustainability</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Returns</FooterLink>
            <FooterLink href="#">Distributors</FooterLink>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>© {new Date().getFullYear()} TPL Beverages. All rights reserved.</Copyright>
          <FooterBottomLinks>
            <BottomLink href="#">Privacy Policy</BottomLink>
            <BottomLink href="#">Terms of Service</BottomLink>
            <BottomLink href="#">Cookies</BottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;