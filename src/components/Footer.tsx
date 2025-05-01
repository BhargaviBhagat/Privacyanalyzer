import React from 'react';
import { Shield, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-bold">Privacy Analyzer</h2>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
              <Github className="h-5 w-5 mr-2" />
              <span>GitHub</span>
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
              <Twitter className="h-5 w-5 mr-2" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              Privacy Analyzer helps you understand how websites collect and use your data.
              Our mission is to promote transparency and privacy awareness.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Privacy Analyzer. All rights reserved.</p>
          <p className="mt-1">
            Built with privacy in mind. We don't track you while you're tracking the trackers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;