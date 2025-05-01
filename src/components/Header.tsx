import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Shield className="h-8 w-8 mr-3" />
          <h1 className="text-2xl font-bold">Privacy Analyzer</h1>
        </div>
        <div className="flex space-x-4">
          <a href="#how-it-works" className="hover:text-blue-200 transition-colors duration-200">
            How it works
          </a>
          <a href="#about" className="hover:text-blue-200 transition-colors duration-200">
            About
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;