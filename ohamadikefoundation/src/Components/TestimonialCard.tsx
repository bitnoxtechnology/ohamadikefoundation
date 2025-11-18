'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Testimonial } from '../Types/index'
import '../Styles/Testimonials.css'
import avatar from "../assets/user.png"
interface TestimonialsProps {
  testimonials: Testimonial[]
}

const TestimonialCard: React.FC<TestimonialsProps> = ({ testimonials }) => {
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
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Impact Stories</h2>
          <p className="section-subtitle">
            Hear from those whose lives we've touched
          </p>
        </div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={avatar} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialCard
