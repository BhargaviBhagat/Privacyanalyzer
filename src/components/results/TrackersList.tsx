import React, { useState } from 'react';
import { Tracker } from '../../types/types';
import { Eye, Filter } from 'lucide-react';

interface TrackersListProps {
  trackers: Tracker[];
}

const TrackersList: React.FC<TrackersListProps> = ({ trackers }) => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const categories = [...new Set(trackers.map(tracker => tracker.category))];
  
  const filteredTrackers = categoryFilter 
    ? trackers.filter(tracker => tracker.category === categoryFilter) 
    : trackers;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Trackers Detected ({trackers.length})</h3>
        
        <div className="mt-3 sm:mt-0 flex items-center">
          <Filter className="h-4 w-4 mr-2 text-gray-500" />
          <select
            value={categoryFilter || ''}
            onChange={(e) => setCategoryFilter(e.target.value || null)}
            className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredTrackers.length === 0 ? (
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-500">No trackers found in this category</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTrackers.map((tracker, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium text-gray-900">{tracker.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{tracker.domain}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tracker.category === 'Advertising' ? 'bg-red-100 text-red-800' :
                      tracker.category === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                      tracker.category === 'Social Media' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {tracker.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{tracker.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2 text-gray-700">What Are Trackers?</h4>
        <p className="text-gray-600 text-sm">
          Trackers are scripts or code that collect data about your online behavior. 
          They can monitor your clicks, pages visited, time spent on site, and sometimes 
          even mouse movements. This data is often used for advertising, analytics, and user profiling.
        </p>
      </div>
    </div>
  );
};

export default TrackersList;