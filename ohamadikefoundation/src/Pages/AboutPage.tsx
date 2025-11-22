"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Heart,
  Users,
  GraduationCap,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import AboutImage1 from "../assets/About1.jpeg";
import AboutImage2 from "../assets/founder.jpg";
import "../Styles/Pages.css";
import "../Styles/About.css";
import Meta from "../Components/Meta";

const AboutPage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsData = [
    { icon: Users, label: "Students Supported", value: "1000+" },
    { icon: Award, label: "Years Active", value: "14+" },
    { icon: Target, label: "Lives Impacted", value: "5000+" },
  ];

  return (
    <>
      <Meta title="About Us - Ohamadike Foundation" />
      <div className="page">
        <div className="page-container">
          {/* Hero Header */}
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>About Ohamadike Foundation</h1>
            <p>A legacy of compassion and community development since 2010</p>
          </motion.div>

          {/* Our Story Section - Image on Right */}
          <motion.section
            className="content-section about-story"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="story-grid">
              <motion.div className="story-content" variants={itemVariants}>
                <div>
                  <h2 className="section-title">Our Story</h2>
                  <p className="section-subtitle leading-relaxed">
                    Established in 2010 and registered with CAC/IT/N0 38276,
                    Ohamadike International Foundation is a nonprofit
                    organization dedicated to alleviating the suffering of the
                    less privileged and physically challenged across the West
                    African sub-region.
                  </p>
                </div>

                <div className="story-highlight">
                  <p className="highlight-text">
                    As a proud member of Remigella International Group, we
                    leverage organizational strength and resources to maximize
                    our impact on communities in need.
                  </p>
                </div>

                <p className="section-subtitle leading-relaxed">
                  Our foundation has supported over 1,000 indigent students with
                  scholarships to university level, both in Nigeria and
                  overseas, while also providing essential support to widows,
                  orphans, and the physically challenged.
                </p>
              </motion.div>

              <motion.div
                className="story-image-wrapper"
                variants={itemVariants}
              >
                <div className="image-container">
                  <img
                    src={AboutImage1}
                    alt="Ohamadike Foundation community members working together"
                  />
                </div>
                <div className="image-overlay-accent"></div>
              </motion.div>
            </div>
          </motion.section>

          {/* Quick Stats Section */}
          <motion.section
            className="content-section stats-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="stats-grid">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="stat-card"
                    variants={itemVariants}
                  >
                    <div className="stat-icon">
                      <Icon />
                    </div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Our Core Values Section */}
          <motion.section
            className="content-section values-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header-centered">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                These principles guide every decision we make and every person
                we serve
              </p>
            </div>

            <div className="values-grid">
              <motion.div className="value-card" variants={itemVariants}>
                <div className="value-icon">
                  <Heart />
                </div>
                <h3>Compassion</h3>
                <p>
                  Putting people first in everything we do, with genuine care
                  and empathy for those in need.
                </p>
              </motion.div>

              <motion.div className="value-card" variants={itemVariants}>
                <div className="value-icon">
                  <Users />
                </div>
                <h3>Integrity</h3>
                <p>
                  Transparent and accountable stewardship of resources and trust
                  placed in our foundation.
                </p>
              </motion.div>

              <motion.div className="value-card" variants={itemVariants}>
                <div className="value-icon">
                  <GraduationCap />
                </div>
                <h3>Empowerment</h3>
                <p>
                  Creating sustainable pathways out of poverty through education
                  and opportunity.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="content-section mission-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mission-grid">
              <motion.div
                className="mission-image-wrapper"
                variants={itemVariants}
              >
                <div className="image-container">
                  <img
                    src={AboutImage2}
                    alt="Foundation mission and community programs"
                  />
                </div>
                <div className="image-overlay-accent"></div>
              </motion.div>

              <motion.div className="mission-content" variants={itemVariants}>
                <h2 className="section-title">Our Mission</h2>
                <p className="section-subtitle leading-relaxed">
                  To be an effective catalyst for positive social change by
                  identifying and addressing the root causes of poverty and
                  inequality in West African communities.
                </p>

                <div className="mission-points">
                  <div className="mission-point">
                    <div className="point-icon">
                      <Target />
                    </div>
                    <div>
                      <h4>Targeted Support</h4>
                      <p>
                        We focus on education, healthcare, and livelihood
                        programs that create lasting impact.
                      </p>
                    </div>
                  </div>

                  <div className="mission-point">
                    <div className="point-icon">
                      <Lightbulb />
                    </div>
                    <div>
                      <h4>Innovation & Sustainability</h4>
                      <p>
                        Our programs are designed to be self-sustaining and
                        scalable across communities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
