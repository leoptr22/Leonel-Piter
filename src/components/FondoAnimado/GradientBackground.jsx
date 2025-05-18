import React from 'react';
import { motion } from 'framer-motion';
import './GradientBackground.css';

const GradientBackground = () => {
    return (
        <div className="gradient-container">
            <div className="gradient-overlay"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 3 }}
                className="gradient-bubble gradient-bubble-1"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 3, delay: 0.5 }}
                className="gradient-bubble gradient-bubble-2"
            />
            
        </div>
    );
};

export default GradientBackground;