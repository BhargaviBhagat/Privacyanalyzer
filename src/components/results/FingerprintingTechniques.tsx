import React from 'react';
import { FingerprintingTechnique } from '../../types/types';
import { Fingerprint } from 'lucide-react';

interface FingerprintingTechniquesProps {
  techniques: FingerprintingTechnique[];
}

const FingerprintingTechniques: React.FC<FingerprintingTechniquesProps> = ({ techniques }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Fingerprinting Detection
      </h3>
      
      <div className="space-y-4">
        {techniques.map((technique, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className={`px-4 py-3 flex items-center justify-between ${
              technique.detected ? 'bg-red-50' : 'bg-green-50'
            }`}>
              <div className="flex items-center">
                <Fingerprint className={`h-5 w-5 mr-2 ${
                  technique.detected ? 'text-red-500' : 'text-green-500'
                }`} />
                <span className="font-medium">{technique.name}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                technique.detected 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {technique.detected ? 'Detected' : 'Not Detected'}
              </span>
            </div>
            {technique.detected && (
              <div className="px-4 py-3 bg-white border-t border-gray-200">
                <p className="text-sm text-gray-600">{technique.description}</p>
                <p className="text-sm font-medium mt-2 text-gray-800">Privacy impact: {technique.privacyImpact}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2 text-gray-700">What Is Fingerprinting?</h4>
        <p className="text-gray-600 text-sm">
          Browser fingerprinting is a technique that collects information about your device, browser settings, and installed plugins 
          to create a unique identifier. Unlike cookies, fingerprinting is harder to detect and block, making it a more invasive 
          tracking method that persists even when cookies are cleared.
        </p>
      </div>
    </div>
  );
};

export default FingerprintingTechniques;