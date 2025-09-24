import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Cpu className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">TeluguTechVidya</span>
                <span className="text-xs text-white/70">Master Technology</span>
              </div>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Empowering tech professionals with cutting-edge courses in DevOps, AI, AWS, and more. 
              Join thousands of learners advancing their careers with our expert-led training.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors">Home</Link>
              <Link to="/courses" className="block text-white/70 hover:text-white transition-colors">Courses</Link>
              <Link to="/about" className="block text-white/70 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-white/70 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@telugutechvidya.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2024 TeluguTechVidya. All rights reserved. | Designed with ❤️ for tech enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
