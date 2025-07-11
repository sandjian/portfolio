"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react'; 

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

   
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); 

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}   
          exit={{ opacity: 0, y: 50 }}     
          transition={{ duration: 0.3 }}   
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary/85 text-foreground rounded-full 
                     shadow-lg hover:bg-primary transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-primary/85 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" /> 
        </motion.button>
      )}
    </AnimatePresence>
  );
}