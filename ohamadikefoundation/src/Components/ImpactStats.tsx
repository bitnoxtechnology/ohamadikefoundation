import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { getIconComponent } from '../Utils/Icon-helper';
import type { ImpactStat } from '../Types/index';
import '../Styles/ImpactStats.css';

interface ImpactStatsProps {
  stats: ImpactStat[];
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ stats }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="impact-stats">
      <div className="impact-stats-container">
        <motion.div
          className="impact-stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => {
            const Icon = getIconComponent(stat.icon);

            return (
              <motion.div
                key={index}
                className="impact-stat-card"
                variants={itemVariants}
              >
                <div className="impact-stat-icon">
                  {Icon && <Icon className="icon-svg" />}
                </div>
                <div className="impact-stat-value">{stat.value}</div>
                <div className="impact-stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;