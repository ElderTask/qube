import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Bot, Code, Cpu, MessageSquare, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';
import ChatBox from '../components/Chat/ChatBox';
import { Title, Subtitle, CardTitle, CardText } from '../components/Typography';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/Tr6uMK0nfINCdj7j/scene.splinecode" />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      
      <div className="relative z-20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] inline-block">
              <Title className="mb-6 bg-gradient-to-r from-purple-400 via-white to-blue-400 text-transparent bg-clip-text">
                Create Your AI Companion
              </Title>
              <Subtitle className="max-w-3xl mx-auto text-white/90">
                Qube empowers creators to build, train, and deploy their own AI chatbots with ease
              </Subtitle>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatedCard delay={0.4}>
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 rounded-xl">
                  <Bot className="w-12 h-12 mb-4 text-purple-300" />
                  <CardTitle className="mb-2">Custom AI Bots</CardTitle>
                  <CardText>Create personalized AI assistants tailored to your specific needs</CardText>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.5}>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl">
                  <Code className="w-12 h-12 mb-4 text-blue-300" />
                  <CardTitle className="mb-2">No-Code Platform</CardTitle>
                  <CardText>Build sophisticated AI chatbots without coding</CardText>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.6}>
                <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 p-6 rounded-xl">
                  <Cpu className="w-12 h-12 mb-4 text-cyan-300" />
                  <CardTitle className="mb-2">Advanced Training</CardTitle>
                  <CardText>Train your bot with custom data for optimal results</CardText>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.7}>
                <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 p-6 rounded-xl">
                  <MessageSquare className="w-12 h-12 mb-4 text-teal-300" />
                  <CardTitle className="mb-2">Natural Chat</CardTitle>
                  <CardText>Enable human-like interactions with NLP</CardText>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.8}>
                <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 p-6 rounded-xl">
                  <Zap className="w-12 h-12 mb-4 text-green-300" />
                  <CardTitle className="mb-2">Real-time Learning</CardTitle>
                  <CardText>Your AI evolves through continuous interactions</CardText>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.9}>
                <div className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 p-6 rounded-xl">
                  <Shield className="w-12 h-12 mb-4 text-yellow-300" />
                  <CardTitle className="mb-2">Secure & Private</CardTitle>
                  <CardText>Enterprise-grade security for your data</CardText>
                </div>
              </AnimatedCard>
            </motion.div>

            {/* Chat Demo Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h2 className="text-2xl font-bold mb-8 text-center lg:text-left bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Try Our Demo AI Assistant
              </h2>
              <ChatBox />
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center space-y-4"
          >
            <Link 
              to="/builder"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] mr-4"
            >
              Try our AI
            </Link>
            <Link 
              to="/waitlist" 
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}