import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                borderRadius: ["25%", "50%", "25%"]
              }}
              transition={{ 
                duration: 1,
                ease: "linear",
                repeat: Infinity
              }}
              className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 flex items-center justify-center"
            >
              <Cpu className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Qube AI
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}