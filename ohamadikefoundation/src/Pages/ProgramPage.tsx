"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getIconComponent } from "../Utils/Icon-helper";
import { programs } from "../Data/Programs";
import "../Styles/ProgramPage.css";
import PromoteImage1 from "../assets/PromoteImage1.jpeg";
import PromoteImage2 from "../assets/PromoteImage2.jpeg";
import PromoteImage3 from "../assets/PromoteImage3.jpeg";
import PromoteImage4 from "../assets/PromoteImage4.jpeg";
import Meta from "../Components/Meta";

const programImages: { [key: string]: string } = {
  education: PromoteImage1,
  healthcare: PromoteImage2,
  housing: PromoteImage3,
  empowerment: PromoteImage4,
};

const ProgramsPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <>
      <Meta title="Our Programs - Ohamadike Foundation" />

      <div className="programs-page">
        <div className="programs-page-container">
          <motion.div
            className="programs-page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Programs</h1>
            <p>
              Comprehensive initiatives designed to create lasting change in
              communities
            </p>
          </motion.div>
          <motion.div
            className="programs-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {programs.map((program, index) => {
              const Icon = getIconComponent(program.icon);
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={program.id}
                  className={`program-item ${!isEven ? "reverse" : ""}`}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="program-image">
                    <img
                      src={programImages[program.id] || PromoteImage1}
                      alt={`${program.title} program in action`}
                    />
                  </div>
                  <div className="program-content">
                    <div className="program-icon">{Icon && <Icon />}</div>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <div className="program-highlight">
                      <p>{program.impact}</p>
                    </div>
                    <button className="program-learn-more">
                      Learn More <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default ProgramsPage;
