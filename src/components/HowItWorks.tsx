import React from 'react';
import { Search, Shield, BadgeAlert, FileText } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Enter Website URL",
      description: "Provide the URL of the website you want to analyze for privacy concerns."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Scan For Trackers",
      description: "Our tool scans for tracking scripts, cookies, and fingerprinting methods used by the website."
    },
    {
      icon: <BadgeAlert className="h-8 w-8 text-amber-500" />,
      title: "Analyze Privacy Risk",
      description: "We evaluate the data collection practices and provide a privacy risk score."
    },
    {
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      title: "Get Detailed Report",
      description: "Review a comprehensive report of all privacy concerns and download it for your records."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Privacy Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2 text-gray-700">Data Collection</h4>
              <p className="text-gray-600">
                Websites can collect vast amounts of personal data through various tracking techniques, often without clear disclosure.
              </p>
            </div>
            <div className="p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold mb-2 text-gray-700">Targeted Advertising</h4>
              <p className="text-gray-600">
                Your browsing behavior is used to create profiles for targeted advertising, potentially revealing sensitive information.
              </p>
            </div>
            <div className="p-4 border-l-4 border-teal-500">
              <h4 className="font-semibold mb-2 text-gray-700">Data Sharing</h4>
              <p className="text-gray-600">
                Collected data may be shared with third parties, leading to unknown use of your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;