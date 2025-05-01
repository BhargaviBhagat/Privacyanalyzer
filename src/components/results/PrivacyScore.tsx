import React from 'react';
import { PrivacyScoreDetails } from '../../types/types';

interface PrivacyScoreProps {
  score: number;
  details: PrivacyScoreDetails;
}

const PrivacyScore: React.FC<PrivacyScoreProps> = ({ score, details }) => {
  // Calculate the background color based on the score
  const getScoreColor = () => {
    if (score <= 3) return 'bg-red-500';
    if (score <= 6) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  // Calculate the width for the score meter
  const getScoreWidth = () => {
    return `${(score / 10) * 100}%`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Privacy Score</h3>
      
      <div className="flex items-center mb-6">
        <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden mr-4">
          <div 
            className={`absolute top-0 left-0 h-full ${getScoreColor()} transition-all duration-1000 ease-out`} 
            style={{ width: getScoreWidth() }}
          ></div>
        </div>
        <div className="text-3xl font-bold min-w-[60px] text-center">{score}/10</div>
      </div>

      <div className="space-y-3">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}:
            </span>
            <span className={`font-medium ${value > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {value > 0 ? '+' : ''}{value}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2 text-gray-700">What This Means</h4>
        <p className="text-gray-600 text-sm">
          {score <= 3 && "This website has serious privacy concerns. It collects a significant amount of user data and employs multiple tracking techniques."}
          {score > 3 && score <= 6 && "This website has moderate privacy concerns. While some tracking is present, it's not excessive."}
          {score > 6 && "This website respects user privacy. It has minimal tracking and good data practices."}
        </p>
      </div>
    </div>
  );
};

export default PrivacyScore;