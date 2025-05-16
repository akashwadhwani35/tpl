import React from 'react';
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
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

const Products = () => {
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
            Discover our collection of meticulously crafted beverages designed to elevate your drinking experience.
          </SectionSubtitle>
        </SectionHeader>
        
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
      </ProductsContainer>
    </ProductsSection>
  );
};

export default Products;