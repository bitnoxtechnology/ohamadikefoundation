'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Transforming Lives Through Compassion
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Empowering communities across West Africa through education, healthcare, and sustainable development
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
<Link to= "/about">
          <button
            className="hero-btn-primary"
            onClick={() => onNavigate('programs')}
          >
            Our Programs
          </button>
</Link>
         
         <Link to="/contact">
          <button className="hero-btn-secondary">Get Involved</button>
         </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
