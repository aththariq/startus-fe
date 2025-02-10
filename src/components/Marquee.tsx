import React from "react";
import { motion } from "framer-motion";

const Marquee: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="px-4 py-14 mx-auto max-w-7xl"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      {/* Title */}
      <motion.h1
        className="mb-8 text-lg font-light tracking-wide text-center text-gray-500 sm:text-xl lg:text-lg"
        variants={itemVariants}
      >
        We are proud to be part of these amazing initiatives with trusted
        partners.
      </motion.h1>

      {/* Grid for Logos */}
      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
        {/* Tanoto Foundation */}
        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            alt="Tanoto Foundation Logo"
            className="block object-contain h-12 w-auto"
            src="/logos/tanoto.png"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            alt="ITB Logo"
            className="block object-contain h-20 w-auto"
            src="/logos/itb.png"
          />
        </motion.div>

        {/* Ecoxyztem */}
        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            alt="Ecoxyztem Logo"
            className="block object-contain h-24 w-auto"
            src="/logos/ecoxyz.png"
          />
        </motion.div>

        {/* SMAN 20 Bandung */}
        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <img
            alt="SMAN 20 Bandung Logo"
            className="block object-contain h-20 w-auto"
            src="/logos/sma.png"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Marquee;
