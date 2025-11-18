'use client'

import React from 'react'
import HeroSection from '../Components/Herosection'
import ImpactStats from '../Components/ImpactStats'
import ProgramCard from '../Components/ProgramCard'
import TestimonialCard from '../Components/TestimonialCard'
import { programs } from '../Data/Programs'
import { impactStats } from '../Data/Impact'
import { testimonials } from '../Data/Testimonial'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <HeroSection onNavigate={navigate} />
      <ImpactStats stats={impactStats} />
      <ProgramCard programs={programs} />
      <TestimonialCard testimonials={testimonials} />
    </>
  )
}

export default HomePage