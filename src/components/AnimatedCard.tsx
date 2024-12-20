import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: 1,
        y: [-5, 0, -5]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      transition={{ 
        delay,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3
        }
      }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.07)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
}