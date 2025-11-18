'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import '../Styles/Pages.css'
import '../Styles/Contact.css'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="page">
      <div className="page-container">
        {/* Page Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to learn more or get involved with our mission.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="section-title">Contact Information</h2>

            <motion.div className="contact-item" variants={itemVariants}>
              <MapPin className="contact-icon" />
              <div>
                <h3>Head Office</h3>
                <p>
                  No. 1 Ohamadike Avenue, Akuma
                  <br />
                  Oru East Local Government Area
                  <br />
                  Imo State, Nigeria
                </p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <Mail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>
                  ohamadikefoundation@remigellagroup.com
                  <br />
                  ohamadikefoundation2010@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <Phone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>Available on request</p>
              </div>
            </motion.div>

            <motion.div className="contact-socials" variants={itemVariants}>
              <h3>Connect With Us</h3>
              <div className="social-buttons">
                <button className="social-btn" aria-label="Facebook">
                  <Facebook size={20} />
                </button>
                <button className="social-btn" aria-label="Twitter">
                  <Twitter size={20} />
                </button>
                <button className="social-btn" aria-label="Instagram">
                  <Instagram size={20} />
                </button>
                <button className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage