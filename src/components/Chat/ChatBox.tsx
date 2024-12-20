import { useState } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { motion } from 'framer-motion';

export interface Message {
  content: string;
  isBot: boolean;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi! I'm the Qube AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { content: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage = { 
        content: "Thanks for your message! This is a demo of how your AI companion could interact with users. You can try out our AI by clicking the button below or in the top right corner.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.07)]"
    >
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
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
            className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}