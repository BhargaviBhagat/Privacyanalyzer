import React, { useState } from 'react';
import { Cookie } from '../../types/types';
import { Cookie as CookieIcon, ExternalLink } from 'lucide-react';

interface CookieAnalysisProps {
  cookies: Cookie[];
}

const CookieAnalysis: React.FC<CookieAnalysisProps> = ({ cookies }) => {
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  
  const cookieTypes = [...new Set(cookies.map(cookie => cookie.type))];
  
  const filteredCookies = typeFilter 
    ? cookies.filter(cookie => cookie.type === typeFilter) 
    : cookies;

  // Count cookies by type
  const cookieCounts = cookieTypes.reduce((acc, type) => {
    acc[type] = cookies.filter(cookie => cookie.type === type).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Cookie Analysis ({cookies.length})</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(cookieCounts).map(([type, count]) => (
          <button
            key={type}
            onClick={() => setTypeFilter(typeFilter === type ? null : type)}
            className={`p-3 rounded-lg border transition-all flex flex-col items-center ${
              typeFilter === type 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <span className="text-2xl mb-1">
              {type === 'Essential' ? '🔒' : 
               type === 'Marketing' ? '🎯' : 
               type === 'Analytics' ? '📊' : 
               type === 'Preferences' ? '⚙️' : '🍪'}
            </span>
            <span className="font-medium">{type}</span>
            <span className="text-sm text-gray-500">{count} cookies</span>
          </button>
        ))}
      </div>
      
      {filteredCookies.length === 0 ? (
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500">No cookies found in this category</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiration</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCookies.map((cookie, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <CookieIcon className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-900">{cookie.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {cookie.domain}
                      {cookie.thirdParty && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          3rd Party
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      cookie.type === 'Marketing' ? 'bg-red-100 text-red-800' :
                      cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                      cookie.type === 'Essential' ? 'bg-green-100 text-green-800' :
                      cookie.type === 'Preferences' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {cookie.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{cookie.expiration}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{cookie.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2 text-gray-700">What Are Cookies?</h4>
        <p className="text-gray-600 text-sm">
          Cookies are small text files stored on your device that websites use to remember information about you. 
          First-party cookies are set by the site you visit, while third-party cookies are set by other domains. 
          They can be used for essential functions, preferences, analytics, or tracking and marketing.
        </p>
      </div>
    </div>
  );
};

export default CookieAnalysis;