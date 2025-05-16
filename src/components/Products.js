import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import product1Image from '../assets/images/product1.jpg';
import product2Image from '../assets/images/product2.jpg';
import product3Image from '../assets/images/product3.jpg';

const ProductsSection = styled.section`
  padding: 8rem 2rem;
  background-color: #f9fafb;
`;

const ProductsContainer = styled.div`
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tab = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'rgba(99, 102, 241, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#6366F1' : '#4b5563'};
  border: 2px solid ${props => props.active ? '#6366F1' : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(99, 102, 241, 0.05);
    color: #6366F1;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const ProductCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTag = styled.span`
  font-family: 'Inter', sans-serif;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const ProductTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProductButton = styled.button`
  font-family: 'Inter', sans-serif;
  background-color: transparent;
  color: #6366F1;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L15 8L8 15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 8H15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SubsectionHeader = styled(motion.h3)`
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin: 4rem 0 1.5rem;
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
`;

const FeatureTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
    }
  })
};

const NpdContainer = styled.div`
  margin-top: 3rem;
  background-color: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const NpdTitle = styled(motion.h3)`
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const NpdDescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const IdeaList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const IdeaItem = styled(motion.li)`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
  border-left: 3px solid #6366F1;
  padding: 1.5rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
  list-style-type: none;
`;

const Products = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'featured':
        return (
          <ProductsGrid>
            <ProductCard
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <ProductImage src={product1Image} alt="Artisan Sparkling Water" />
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
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <ProductImage src={product2Image} alt="Botanical Elixir" />
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
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <ProductImage src={product3Image} alt="Citrus Essence" />
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
          <>
            <SubsectionHeader
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              White & Private Labelling Solutions
            </SubsectionHeader>
            
            <SectionSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: '3rem' }}
            >
              Transform your beverage vision into reality with our comprehensive white and private labelling services.
            </SectionSubtitle>
            
            <FeatureGrid>
              <FeatureCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                transition={{ duration: 0.5, delay: 0.2 }}
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
                transition={{ duration: 0.5, delay: 0.3 }}
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
                transition={{ duration: 0.5, delay: 0.4 }}
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
                transition={{ duration: 0.5, delay: 0.5 }}
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
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <IconContainer>🔍</IconContainer>
                <FeatureTitle>Quality Assurance</FeatureTitle>
                <FeatureDescription>
                  Rigorous quality control measures ensure every batch of your product meets our exacting standards for excellence.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </>
        );
      case 'npd':
        return (
          <NpdContainer>
            <NpdTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              New Product Development Ideas
            </NpdTitle>
            
            <NpdDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At TPL Beverages, we're constantly exploring innovative beverage concepts to help our partners stay ahead of the curve. Our NPD team identifies emerging trends and develops cutting-edge products that resonate with today's discerning consumers.
            </NpdDescription>
            
            <IdeaList>
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <strong>Adaptogenic Beverages:</strong> Functional drinks infused with adaptogens like ashwagandha, reishi, and rhodiola to support stress management and overall wellness.
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <strong>Prebiotic Sparkling Tonics:</strong> Effervescent beverages enriched with prebiotic fibers to support gut health and digestive wellness.
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <strong>Botanical Cold Brews:</strong> Non-alcoholic botanical infusions cold-brewed for enhanced flavor profiles and aromatic experiences.
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <strong>Heritage Flavor Revivals:</strong> Modern interpretations of traditional beverages from around the world, bringing unique cultural experiences to new markets.
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <strong>Sustainable Packaging Solutions:</strong> Innovative eco-friendly packaging options including biodegradable materials and closed-loop recycling systems.
              </IdeaItem>
              
              <IdeaItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong>Craft Mixers Collection:</strong> Premium non-alcoholic mixers designed specifically for crafting sophisticated mocktails and enhancing spirits.
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
            transition={{ duration: 0.6 }}
          >
            Our Premium Products
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our collection of meticulously crafted beverages and services designed to elevate your drinking experience.
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
            NPD Ideas
          </Tab>
        </TabsContainer>
        
        {renderTabContent()}
        
      </ProductsContainer>
    </ProductsSection>
  );
};

export default Products;