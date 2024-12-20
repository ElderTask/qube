import { motion } from 'framer-motion';
import { CardText } from './Typography';

interface AboutSectionProps {
  title: string;
  content: string;
  delay?: number;
}

export default function AboutSection({ title, content, delay = 0 }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        {title}
      </h2>
      <CardText className="text-lg leading-relaxed">
        {content}
      </CardText>
    </motion.div>
  );
}