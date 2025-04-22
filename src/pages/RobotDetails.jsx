import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Chart from '../components/dashboard/Chart';
import AlertCard from '../components/dashboard/AlertCard';
import { robots, robotActivityData, robotIssuesData, alertsData } from '../utils/mockData';

const RobotDetails = ({ onLogout }) => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // Simulate API call to fetch robot details
    setTimeout(() => {
      const foundRobot = robots.find(r => r.id === parseInt(id)) || robots[0];
      setRobot(foundRobot);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const statusColors = {
    active: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      dot: 'bg-green-500'
    },
    idle: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      dot: 'bg-blue-500'
    },
    maintenance: {
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      dot: 'bg-orange-500'
    },
    error: {
      bg: 'bg-red-100',
      text: 'text-red-800',
      dot: 'bg-red-500'
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar onLogout={onLogout} />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600">Loading robot data...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!robot) {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar onLogout={onLogout} />
        <div className="flex-1 p-6">
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Robot Not Found</h2>
            <p className="text-gray-500 mb-6">The robot you're looking for doesn't exist or has been decommissioned.</p>
            <Link to="/dashboard" className="btn btn-primary">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const statusStyle = statusColors[robot.status.toLowerCase()] || statusColors.idle;
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Back Button & Title */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 flex items-center mb-4 md:mb-0">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dashboard
              </Link>
            </div>
            
            <div className="flex items-center">
              <button className="mr-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              
              <button className="mr-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              
              <div className="relative">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Robot Header */}
          <div className="card p-6 mb-8">
            <div className="md:flex md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{robot.name}</h1>
                  <div className="flex items-center">
                    <span className={`inline-flex h-2 w-2 rounded-full ${statusStyle.dot} mr-2`}></span>
                    <span className={`${statusStyle.text}`}>{robot.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:ml-auto flex flex-wrap md:space-x-4">
                <div className="bg-gray-100 rounded-lg px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-0">
                  <span className="text-xs text-gray-500 block">Serial Number</span>
                  <span className="font-medium">{robot.serialNumber || 'PB-2023-8547'}</span>
                </div>
                
                <div className="bg-gray-100 rounded-lg px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-0">
                  <span className="text-xs text-gray-500 block">Battery</span>
                  <span className={`font-medium ${robot.batteryLevel < 20 ? 'text-red-600' : ''}`}>
                    {robot.batteryLevel}%
                  </span>
                </div>
                
                <div className="bg-gray-100 rounded-lg px-4 py-2 mb-2 md:mb-0 mr-2 md:mr-0">
                  <span className="text-xs text-gray-500 block">Last Active</span>
                  <span className="font-medium">{robot.lastActive}</span>
                </div>
                
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <span className="text-xs text-gray-500 block">Issues</span>
                  <span className={`font-medium ${robot.issuesDetected > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {robot.issuesDetected}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'activity'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Activity History
              </button>
              <button
                onClick={() => setActiveTab('issues')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'issues'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Issues & Alerts
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Settings
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div>
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Chart
                    type="line"
                    data={robotActivityData}
                    title="Recent Activity"
                    subtitle={`Inspection distance for ${robot.name} (last 7 days)`}
                  />
                  <Chart
                    type="bar"
                    data={robotIssuesData}
                    title="Issues by Type"
                    subtitle="Breakdown of detected pipe issues"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Specifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Model</span>
                        <span className="font-medium text-gray-900">PipeBot Pro X2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Diameter Range</span>
                        <span className="font-medium text-gray-900">10-60 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Camera Resolution</span>
                        <span className="font-medium text-gray-900">4K Ultra HD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Max Speed</span>
                        <span className="font-medium text-gray-900">2.5 m/min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Battery Type</span>
                        <span className="font-medium text-gray-900">Lithium-Ion</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Waterproof Rating</span>
                        <span className="font-medium text-gray-900">IP68</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Current Location</h3>
                    <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center mb-4">
                      <span className="text-gray-500">Map View</span>
                    </div>
                    <div className="font-medium text-gray-900">{robot.location}</div>
                    <div className="text-sm text-gray-600 mt-1">Last updated: 15 minutes ago</div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Alerts</h3>
                    <div className="space-y-4">
                      {alertsData.slice(0, 3).map(alert => (
                        <div key={alert.id} className="flex items-start space-x-3">
                          {alert.type === 'error' && (
                            <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {alert.type === 'warning' && (
                            <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {alert.type === 'info' && (
                            <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                            <p className="text-xs text-gray-500">{alert.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all alerts
                    </button>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">Maintenance History</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Mar 15, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Routine</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Alex Wong</td>
                          <td className="px-4 py-3 text-sm text-gray-900">Battery replacement and sensor calibration</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Feb 2, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Repair</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Maria Garcia</td>
                          <td className="px-4 py-3 text-sm text-gray-900">Camera module replacement due to water damage</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Dec 12, 2022</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Software</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Remote</td>
                          <td className="px-4 py-3 text-sm text-gray-900">Firmware update to version 3.5.2</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <div>
                <div className="card p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">Activity Timeline</h3>
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-200"></div>
                    <div className="space-y-8">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative flex space-x-4">
                          <div className="absolute -left-1 top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-500"></div>
                          <div className="ml-2 min-w-0 flex-1 pt-1.5">
                            <div className="flex justify-between">
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Completed inspection of Section B-12
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {i === 0 ? '1 hour ago' : `${i + 1} days ago`}
                                </p>
                              </div>
                              <div className="flex-shrink-0 self-start">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                              Inspected 120 meters of pipe in Section B-12. {i % 2 === 0 ? 'No issues detected.' : 'Detected 2 minor issues, reports generated.'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Load more activity
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Issues Tab */}
            {activeTab === 'issues' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-red-800">Critical Issues</h3>
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">2</span>
                    </div>
                    <p className="text-sm text-red-700">Issues requiring immediate attention</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-yellow-800">Warnings</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">5</span>
                    </div>
                    <p className="text-sm text-yellow-700">Issues requiring scheduled maintenance</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-blue-800">Informational</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">12</span>
                    </div>
                    <p className="text-sm text-blue-700">General notifications and updates</p>
                  </div>
                </div>
                
                <div className="card p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
                        All
                      </button>
                      <button className="px-3 py-1 text-sm font-medium rounded-full bg-white text-gray-600 hover:bg-gray-100">
                        Critical
                      </button>
                      <button className="px-3 py-1 text-sm font-medium rounded-full bg-white text-gray-600 hover:bg-gray-100">
                        Warning
                      </button>
                      <button className="px-3 py-1 text-sm font-medium rounded-full bg-white text-gray-600 hover:bg-gray-100">
                        Info
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {alertsData.map(alert => (
                      <AlertCard key={alert.id} alert={alert} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <div className="card p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-6 text-gray-900">Robot Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">General Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Robot Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={robot.name}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Assigned Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue={robot.location}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Operational Parameters</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Inspection Speed
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>Standard (1.5 m/min)</option>
                            <option>Slow (0.8 m/min)</option>
                            <option>Fast (2.5 m/min)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Camera Resolution
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>4K Ultra HD</option>
                            <option>1080p HD</option>
                            <option>720p HD (Power Saving)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Notification Settings</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="critical"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            defaultChecked
                          />
                          <label htmlFor="critical" className="ml-2 block text-sm text-gray-700">
                            Critical alerts (SMS + Email)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="warnings"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            defaultChecked
                          />
                          <label htmlFor="warnings" className="ml-2 block text-sm text-gray-700">
                            Warning alerts (Email only)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="info"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="info" className="ml-2 block text-sm text-gray-700">
                            Informational alerts
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="scheduled"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            defaultChecked
                          />
                          <label htmlFor="scheduled" className="ml-2 block text-sm text-gray-700">
                            Scheduled maintenance reminders
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Maintenance Schedule</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Next Scheduled Maintenance
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue="2023-05-15"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Maintenance Interval
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>Every 3 months</option>
                            <option>Every 6 months</option>
                            <option>Annually</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end space-x-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotDetails;