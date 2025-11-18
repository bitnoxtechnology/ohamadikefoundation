'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { getIconComponent } from '../Utils/Icon-helper'
import type { Program } from '../Types/index'
import '../Styles/ProgramCards.css'

interface ProgramsProps {
  programs: Program[]
}

const ProgramCard: React.FC<ProgramsProps> = ({ programs }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="section-header">
          <h2 className="section-title">Our Focus Areas</h2>
          <p className="section-subtitle">
            We work across multiple sectors to create lasting positive change in communities
          </p>
        </div>

        <motion.div
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program) => {
            const Icon = getIconComponent(program.icon);
            
            return (
              <motion.div
                key={program.id}
                className="program-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="program-icon">
                  {Icon && <Icon className="w-full h-full" />}
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-impact">{program.impact}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramCard