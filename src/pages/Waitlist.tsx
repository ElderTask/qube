import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Title, Subtitle } from '../components/Typography';

export default function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Title className="mb-6">Join the Waitlist</Title>
            <Subtitle className="mb-12">Be among the first to experience Qube's AI companion creation platform</Subtitle>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]"
              >
                Join Waitlist
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>
            <Title className="mb-6">Welcome to the Waitlist!</Title>
            <Subtitle className="mb-8">Thank you for your interest in Qube. We'll notify you as soon as we're ready to launch.</Subtitle>
            <p className="text-white/80">
              Remember to check back regularly for updates on our progress and launch date.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}