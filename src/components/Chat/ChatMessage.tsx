import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import type { Message } from './ChatBox';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { content, isBot } = message;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/10'
      }`}>
        {isBot ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
      </div>
      <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
        isBot ? 'bg-white/10' : 'bg-gradient-to-r from-purple-500 to-blue-500'
      }`}>
        <p className="text-sm text-white">{content}</p>
      </div>
    </motion.div>
  );
}