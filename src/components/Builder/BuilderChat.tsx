import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw } from 'lucide-react';

interface BuilderChatProps {
  prompt: string;
}

export default function BuilderChat({ prompt }: BuilderChatProps) {
  const [messages, setMessages] = useState([
    { content: "Hi! I'm your custom AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { content: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response based on the original prompt
    setTimeout(() => {
      const botMessage = { 
        content: "I'm a demo of your custom AI assistant. In the full version, I would respond based on your specified behavior and personality!", 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const resetChat = () => {
    setMessages([{ content: "Hi! I'm your custom AI assistant. How can I help you today?", isBot: true }]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Your Custom AI Assistant
        </h3>
        <button
          onClick={resetChat}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isBot ? '' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
              message.isBot ? 'bg-white/10' : 'bg-gradient-to-r from-purple-500 to-pink-500'
            }`}>
              <p className="text-sm text-white">{message.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}