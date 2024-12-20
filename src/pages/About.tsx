import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import { Title } from '../components/Typography';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <Title>About Qube</Title>
        </motion.div>

        <div className="space-y-12">
          <AboutSection
            delay={0.2}
            title="Empowering AI Creation"
            content="Qube is revolutionizing the way creators interact with AI technology. Our platform enables anyone to build sophisticated AI chatbots without the need for technical expertise. Whether you're a content creator, business owner, or community manager, Qube provides the tools you need to create AI companions that truly understand and represent your brand voice."
          />

          <AboutSection
            delay={0.4}
            title="How Qube Helps"
            content="Our intuitive no-code platform simplifies the complex process of AI development. You can easily train your AI with custom data, fine-tune its responses, and deploy it across multiple platforms. With advanced features like personality customization, conversation memory, and real-time learning, your AI companion grows and adapts with your community. Plus, our built-in analytics help you understand and improve your bot's performance over time."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center space-y-4"
        >
          <Link
            to="/builder"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-colors shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] mr-4"
          >
            Try our AI
          </Link>
          <Link
            to="/waitlist"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Join the Waitlist
          </Link>
        </motion.div>
      </div>
    </div>
  );
}