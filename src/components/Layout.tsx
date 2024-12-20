import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://cdn.discordapp.com/attachments/1039943637502533703/1319409863981273089/Qube.jpg?ex=6765dbb1&is=67648a31&hm=e254d6ac857889d6dd4516a4ac86e8f027a2d60f7f09a5ef6f9b4438b484ced1&" 
                alt="Qube Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-xl">Qube</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <a 
                href="https://x.com/qubelibrary" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://t.me/qubelibraries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                Join Our Community
              </a>
              <Link 
                to="/builder"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
              >
                Try our AI
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16">
          <div className="p-4 space-y-4">
            <Link to="/" className="block text-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-xl" onClick={() => setIsMenuOpen(false)}>About</Link>
            <a 
              href="https://x.com/qubelibrary" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Twitter
            </a>
            <a 
              href="https://t.me/qubelibraries" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xl px-4 py-2 bg-white/10 rounded-lg border border-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Our Community
            </a>
            <Link 
              to="/builder"
              className="block text-xl px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Try our AI
            </Link>
          </div>
        </div>
      )}

      <div className="min-h-screen relative">
        {children}
      </div>
    </div>
  );
}