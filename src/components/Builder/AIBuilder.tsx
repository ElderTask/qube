import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import BuilderChat from './BuilderChat';

export default function AIBuilder() {
  const [prompt, setPrompt] = useState('');
  const [isBuilding, setIsBuilding] = useState(false);
  const [builtAI, setBuiltAI] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsBuilding(true);
    // Simulate AI building process
    setTimeout(() => {
      setIsBuilding(false);
      setBuiltAI(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {!builtAI ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Design Your AI Assistant
          </h2>
          <p className="text-white/80 mb-8">
            Describe how you want your AI to behave, its personality, and its purpose.
            Be as specific as you'd like!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: I want an AI that acts as a friendly fitness coach, provides workout tips, and helps create personalized exercise plans..."
              className="w-full h-40 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={isBuilding}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isBuilding ? (
                <>
                  <Wand2 className="w-5 h-5 animate-spin" />
                  Building your AI...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Create My AI
                </>
              )}
            </button>
          </form>
        </motion.div>
      ) : (
        <BuilderChat prompt={prompt} />
      )}
    </div>
  );
}