import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ image, title, subtitle, details, period }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="premium-card rounded-[32px] p-6 flex flex-col items-center text-center mx-4 my-8 h-[520px] justify-between transition-transform duration-300 group overflow-hidden"
      style={{
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="w-full overflow-hidden rounded-xl h-[250px] mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="InknutAntiqua text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="Inter font-semibold text-blue-600 text-sm mb-3 uppercase tracking-wider">{subtitle}</p>
        <p className="Inter text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{details}</p>
      </div>
      <div className="Inter text-gray-400 text-xs font-medium border-t border-gray-50 pt-4 w-full">
        {period}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
