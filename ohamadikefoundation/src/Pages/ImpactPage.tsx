"use client";

import React from "react";
import { motion } from "framer-motion";
import { getIconComponent } from "../Utils/Icon-helper";
import TestimonialCard from "../Components/TestimonialCard";
import { impactStats } from "../Data/Impact";
import { testimonials } from "../Data/Testimonial";
import "../Styles/Pages.css";
import Meta from "../Components/Meta";
import OurWork from "../Components/OurWork";

const ImpactPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Meta title="Our Impact - Ohamadike Foundation" />

      <div className="page">
        <div className="page-container">
          {/* Page Header */}
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Impact</h1>
            <p>
              Measuring success through lives transformed and communities
              empowered
            </p>
          </motion.div>

          <motion.div
            className="impact-stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {impactStats.map((stat, index) => {
              const Icon = getIconComponent(stat.icon);

              return (
                <motion.div
                  key={index}
                  className="impact-stat"
                  variants={itemVariants}
                >
                  <div className="impact-stat-icon">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <div className="impact-stat-value">{stat.value}</div>
                  <div className="impact-stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <OurWork />

          {/* Testimonials Section */}
          <TestimonialCard testimonials={testimonials} />
        </div>
      </div>
    </>
  );
};

export default ImpactPage;
