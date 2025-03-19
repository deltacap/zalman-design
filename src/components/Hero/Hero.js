import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticlesBackground from '../../animations/ParticlesBackground';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #000 100%);
  overflow: hidden;
  padding: var(--space-xl) 0;
  
  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    text-align: center;
  }
`;

const HeroContent = styled.div`
  color: var(--text-light);
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: var(--space-md);
  color: var(--primary-light);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const MainHeading = styled(motion.h1)`
  margin-bottom: var(--space-lg);
  letter-spacing: -0.02em;
  
  span {
    display: block;
    color: var(--primary-color);
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: var(--space-xl);
  font-weight: 300;
  line-height: 1.6;
  opacity: 0.9;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: var(--space-md);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.a)`
  background-color: var(--primary-color);
  color: white;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
`;

const SecondaryButton = styled(motion.a)`
  background-color: transparent;
  color: white;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 113, 227, 0.2) 0%, rgba(0, 113, 227, 0) 70%);
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media (max-width: 992px) {
    margin-top: var(--space-lg);
  }
`;

const FloatingObject = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  filter: blur(40px);
  opacity: 0.15;
  z-index: 1;
`;

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };
  
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay: 0.2,
      },
    },
  };
  
  return (
    <HeroSection id="home" ref={ref}>
      <ParticlesBackground />
      
      <FloatingObject
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-100px',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <FloatingObject
        style={{
          width: '300px',
          height: '300px',
          bottom: '50px',
          left: '10%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <HeroContainer as={motion.div} variants={containerVariants} initial="hidden" animate={controls}>
        <HeroContent>
          <SubHeading variants={itemVariants}>Enterprise Design & Production</SubHeading>
          <MainHeading variants={itemVariants}>
            Elevate Your Brand With <span>Premium Design Excellence</span>
          </MainHeading>
          <Description variants={itemVariants}>
            We craft exceptional digital experiences and print production for enterprises
            that value quality, attention to detail, and impactful results.
          </Description>
          <CTAContainer variants={itemVariants}>
            <PrimaryButton 
              href="#portfolio" 
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 113, 227, 0.3)' }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              View Our Work
            </PrimaryButton>
            <SecondaryButton 
              href="#contact"
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              Schedule Consultation
            </SecondaryButton>
          </CTAContainer>
        </HeroContent>
        
        <HeroImage variants={imageVariants}>
          <motion.img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Zalman Design Production"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;