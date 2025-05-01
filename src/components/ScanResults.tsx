import React from 'react';
import { ScanResultData } from '../types/types';
import TrackersList from './results/TrackersList';
import CookieAnalysis from './results/CookieAnalysis';
import FingerprintingTechniques from './results/FingerprintingTechniques';
import PrivacyScore from './results/PrivacyScore';
import { Download } from 'lucide-react';

interface ScanResultsProps {
  results: ScanResultData | null;
  url: string;
}

const ScanResults: React.FC<ScanResultsProps> = ({ results, url }) => {
  if (!results) {
    return null;
  }

  const handleDownloadReport = () => {
    const reportData = JSON.stringify(results, null, 2);
    const blob = new Blob([reportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `privacy-report-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Results for {url}</h2>
            <p className="text-gray-600 mt-1">Scan completed on {new Date().toLocaleString()}</p>
          </div>
          <button
            onClick={handleDownloadReport}
            className="mt-4 sm:mt-0 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </button>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Note:</strong> This is a simulation of privacy analysis. In a real-world application, we would analyze the actual website's code and network traffic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <PrivacyScore score={results.privacyScore} details={results.privacyDetails} />
        <FingerprintingTechniques techniques={results.fingerprintingTechniques} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <TrackersList trackers={results.trackers} />
        <CookieAnalysis cookies={results.cookies} />
      </div>
    </div>
  );
};

export default ScanResults;