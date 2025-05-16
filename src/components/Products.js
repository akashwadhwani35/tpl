import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import product1Image from '../assets/images/product1.jpg';
import product2Image from '../assets/images/product2.jpg';
import product3Image from '../assets/images/product3.jpg';

const ProductsSection = styled.section`
  padding: 120px 24px;
  background-color: #fff;
`;

const ProductsContainer = styled.div`
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-bottom: 16px;
  }
`;

const Tab = styled.button`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 18px;
  background-color: ${props => props.active ? '#0066cc' : '#f5f5f7'};
  color: ${props => props.active ? '#fff' : '#1d1d1f'};
  border: none;
  border-radius: 980px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: ${props => props.active ? '#0066cc' : '#e8e8ed'};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 260px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 24px;
`;

const ProductTag = styled.span`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #0066cc;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const ProductDescription = styled.p`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  color: #86868b;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ProductButton = styled.button`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: transparent;
  color: #0066cc;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0077ed;
  }
  
  svg {
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// White Labelling Section
const ServicesContainer = styled.div`
  margin-top: 80px;
  padding: 60px 40px;
  background-color: #f5f5f7;
  border-radius: 24px;
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const ServicesHeader = styled(motion.h3)`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.875rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ServicesDescription = styled(motion.p)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  color: #86868b;
  max-width: 600px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.5;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.75rem;
`;

const FeatureTitle = styled.h4`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  color: #86868b;
  line-height: 1.5;
`;

// NPD Ideas Section
const NpdContainer = styled.div`
  margin-top: 80px;
  background-color: #fff;
  border-radius: 24px;
  padding: 0;
`;

const NpdHeader = styled.div`
  padding: 40px;
  background: linear-gradient(100deg, #f2f2f7, #e5e5ea);
  border-radius: 24px 24px 0 0;
`;

const NpdTitle = styled(motion.h3)`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.875rem;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const NpdDescription = styled(motion.p)`
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  color: #86868b;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
`;

const IdeaList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

const IdeaItem = styled(motion.div)`
  background-color: #f5f5f7;
  border-radius: 16px;
  padding: 24px;
  
  strong {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    color: #1d1d1f;
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
  }
  
  p {
    font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 0.875rem;
    color: #86868b;
    line-height: 1.5;
  }
`;

const Products = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'featured':
        return (
          <ProductsGrid>
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProductImageContainer>
                <ProductImage src={product1Image} alt="Artisan Sparkling Water" />
              </ProductImageContainer>
              <ProductContent>
                <ProductTag>Premium</ProductTag>
                <ProductTitle>Artisan Sparkling Water</ProductTitle>
                <ProductDescription>
                  Our signature sparkling water, infused with natural minerals from pristine mountain springs for a crisp, refreshing taste.
                </ProductDescription>
                <ProductButton>
                  Learn More <ArrowIcon />
                </ProductButton>
              </ProductContent>
            </ProductCard>
            
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProductImageContainer>
                <ProductImage src={product2Image} alt="Botanical Elixir" />
              </ProductImageContainer>
              <ProductContent>
                <ProductTag>Signature</ProductTag>
                <ProductTitle>Botanical Elixir</ProductTitle>
                <ProductDescription>
                  A delicate blend of rare herbs and botanicals creating a sophisticated non-alcoholic elixir perfect for special occasions.
                </ProductDescription>
                <ProductButton>
                  Learn More <ArrowIcon />
                </ProductButton>
              </ProductContent>
            </ProductCard>
            
            <ProductCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProductImageContainer>
                <ProductImage src={product3Image} alt="Citrus Essence" />
              </ProductImageContainer>
              <ProductContent>
                <ProductTag>Limited Edition</ProductTag>
                <ProductTitle>Citrus Essence</ProductTitle>
                <ProductDescription>
                  A vibrant fusion of exotic citrus flavors harvested at peak ripeness, creating a balance of tangy and sweet notes.
                </ProductDescription>
                <ProductButton>
                  Learn More <ArrowIcon />
                </ProductButton>
              </ProductContent>
            </ProductCard>
          </ProductsGrid>
        );
      case 'labelling':
        return (
          <ServicesContainer>
            <ServicesHeader
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              White & Private Labelling
            </ServicesHeader>
            
            <ServicesDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transform your beverage vision into reality with our comprehensive white and private labelling services.
            </ServicesDescription>
            
            <FeatureGrid>
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <IconContainer>🧪</IconContainer>
                <FeatureTitle>Custom Formulation</FeatureTitle>
                <FeatureDescription>
                  Our expert team will work with you to develop a unique beverage formula tailored to your brand's identity and target audience.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <IconContainer>📝</IconContainer>
                <FeatureTitle>Regulatory Compliance</FeatureTitle>
                <FeatureDescription>
                  We handle all aspects of regulatory compliance, ensuring your product meets all necessary standards and regulations.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <IconContainer>🎨</IconContainer>
                <FeatureTitle>Packaging Design</FeatureTitle>
                <FeatureDescription>
                  Our design team can assist with creating eye-catching packaging that reflects your brand identity and stands out on shelves.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <IconContainer>⚙️</IconContainer>
                <FeatureTitle>Full Production</FeatureTitle>
                <FeatureDescription>
                  From small batch testing to full-scale production runs, we handle every aspect of manufacturing your beverage product.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <IconContainer>📦</IconContainer>
                <FeatureTitle>Distribution Support</FeatureTitle>
                <FeatureDescription>
                  We offer flexible distribution options to help get your product to market efficiently and cost-effectively.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <IconContainer>🔍</IconContainer>
                <FeatureTitle>Quality Assurance</FeatureTitle>
                <FeatureDescription>
                  Rigorous quality control measures ensure every batch of your product meets our exacting standards for excellence.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </ServicesContainer>
        );
      case 'npd':
        return (
          <NpdContainer>
            <NpdHeader>
              <NpdTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                New Product Development
              </NpdTitle>
              
              <NpdDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're constantly exploring innovative beverage concepts to help our partners stay ahead of the curve, identifying emerging trends and developing products that resonate with today's consumers.
              </NpdDescription>
            </NpdHeader>
            
            <IdeaList>
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <strong>Adaptogenic Beverages</strong>
                <p>Functional drinks infused with adaptogens like ashwagandha, reishi, and rhodiola to support stress management and overall wellness.</p>
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <strong>Prebiotic Sparkling Tonics</strong>
                <p>Effervescent beverages enriched with prebiotic fibers to support gut health and digestive wellness.</p>
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <strong>Botanical Cold Brews</strong>
                <p>Non-alcoholic botanical infusions cold-brewed for enhanced flavor profiles and aromatic experiences.</p>
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <strong>Heritage Flavor Revivals</strong>
                <p>Modern interpretations of traditional beverages from around the world, bringing unique cultural experiences to new markets.</p>
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <strong>Sustainable Packaging</strong>
                <p>Innovative eco-friendly packaging options including biodegradable materials and closed-loop recycling systems.</p>
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <strong>Craft Mixers Collection</strong>
                <p>Premium non-alcoholic mixers designed specifically for crafting sophisticated mocktails and enhancing spirits.</p>
              </IdeaItem>
            </IdeaList>
          </NpdContainer>
        );
      default:
        return null;
    }
  };

  return (
    <ProductsSection id="products">
      <ProductsContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Products & Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our collection of meticulously crafted beverages and comprehensive services
          </SectionSubtitle>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'featured'} 
            onClick={() => setActiveTab('featured')}
          >
            Featured Products
          </Tab>
          <Tab 
            active={activeTab === 'labelling'} 
            onClick={() => setActiveTab('labelling')}
          >
            White & Private Labelling
          </Tab>
          <Tab 
            active={activeTab === 'npd'} 
            onClick={() => setActiveTab('npd')}
          >
            New Product Development
          </Tab>
        </TabsContainer>
        
        {renderTabContent()}
        
      </ProductsContainer>
    </ProductsSection>
  );
};

export default Products;