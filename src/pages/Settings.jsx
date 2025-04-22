import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Settings = ({ onLogout }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    company: 'Acme Industries',
    position: 'Maintenance Manager',
    phoneNumber: '+1 (555) 123-4567',
    notifyEmail: true,
    notifySMS: false,
    notifyApp: true,
    emailAlertLevel: 'all',
    dataRetention: '90',
    defaultTimeRange: 'month',
    dashboardLayout: 'grid',
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic would go here
    alert('Settings saved successfully!');
  };
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('common.settings')}</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your account, preferences, and system settings</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                type="submit"
                form="settingsForm"
                className="btn btn-primary flex items-center transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Settings
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === 'notifications'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                Notification Preferences
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === 'system'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('system')}
              >
                System Settings
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === 'team'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('team')}
              >
                Team Management
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none whitespace-nowrap ${
                  activeTab === 'billing'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('billing')}
              >
                Billing & Subscription
              </button>
            </div>
          </div>
          
          <form id="settingsForm" onSubmit={handleSubmit}>
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Personal Information</h2>
                  
                  <div className="mb-6 flex flex-col md:flex-row items-center">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 overflow-hidden relative">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center transition-all duration-200 opacity-0 hover:opacity-100 cursor-pointer">
                          <span className="text-white text-sm font-medium">Change</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Account Security</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Two-Factor Authentication</h3>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="2fa"
                            name="2fa"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="2fa" className="font-medium text-gray-700 dark:text-gray-300">Enable two-factor authentication</label>
                          <p className="text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Notification Preferences */}
            {activeTab === 'notifications' && (
              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Notification Channels</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="notifyEmail"
                          name="notifyEmail"
                          type="checkbox"
                          checked={formData.notifyEmail}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="notifyEmail" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Notifications</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive inspection results and alerts via email</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="notifySMS"
                          name="notifySMS"
                          type="checkbox"
                          checked={formData.notifySMS}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="notifySMS" className="text-sm font-medium text-gray-700 dark:text-gray-300">SMS Notifications</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive critical alerts via text message</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="notifyApp"
                          name="notifyApp"
                          type="checkbox"
                          checked={formData.notifyApp}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="notifyApp" className="text-sm font-medium text-gray-700 dark:text-gray-300">In-App Notifications</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications within the dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Alert Preferences</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="emailAlertLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Alert Level
                      </label>
                      <select
                        id="emailAlertLevel"
                        name="emailAlertLevel"
                        value={formData.emailAlertLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      >
                        <option value="all">All alerts</option>
                        <option value="critical">Critical alerts only</option>
                        <option value="summary">Daily summary only</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="text-md font-medium text-blue-800 dark:text-blue-300 mb-2">Scheduled Reports</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Daily Summary</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive a summary of the day's inspections</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="dailySummary" 
                              id="dailySummary" 
                              className="sr-only toggle-checkbox"
                            />
                            <label 
                              htmlFor="dailySummary" 
                              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Weekly Analytics</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive weekly performance analytics</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="weeklyAnalytics" 
                              id="weeklyAnalytics" 
                              className="sr-only toggle-checkbox"
                              defaultChecked
                            />
                            <label 
                              htmlFor="weeklyAnalytics" 
                              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly Report</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Receive comprehensive monthly reports</p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              name="monthlyReport" 
                              id="monthlyReport" 
                              className="sr-only toggle-checkbox"
                              defaultChecked
                            />
                            <label 
                              htmlFor="monthlyReport" 
                              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* System Settings */}
            {activeTab === 'system' && (
              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Appearance and Language</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Theme Mode</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div 
                          className={`cursor-pointer bg-white border-2 rounded-lg p-4 flex flex-col items-center ${
                            theme === 'light' ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                          onClick={() => toggleTheme('light')}
                        >
                          <div className="w-full h-24 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                            <div className="w-full h-6 bg-white border-b border-gray-200"></div>
                            <div className="p-2">
                              <div className="w-3/4 h-3 bg-gray-300 rounded mb-2"></div>
                              <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">Light Mode</span>
                        </div>
                        
                        <div 
                          className={`cursor-pointer bg-gray-900 border-2 rounded-lg p-4 flex flex-col items-center ${
                            theme === 'dark' ? 'border-blue-500' : 'border-gray-700'
                          }`}
                          onClick={() => toggleTheme('dark')}
                        >
                          <div className="w-full h-24 bg-gray-800 rounded-lg mb-3 overflow-hidden">
                            <div className="w-full h-6 bg-gray-900 border-b border-gray-700"></div>
                            <div className="p-2">
                              <div className="w-3/4 h-3 bg-gray-700 rounded mb-2"></div>
                              <div className="w-1/2 h-3 bg-gray-700 rounded"></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-white">Dark Mode</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Language</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div 
                          className={`cursor-pointer bg-white dark:bg-gray-800 border-2 rounded-lg p-4 flex items-center ${
                            language === 'en' ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                          onClick={() => toggleLanguage('en')}
                        >
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                            <span className="text-gray-800 dark:text-gray-200 font-medium">EN</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">English</span>
                        </div>
                        
                        <div 
                          className={`cursor-pointer bg-white dark:bg-gray-800 border-2 rounded-lg p-4 flex items-center ${
                            language === 'ar' ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                          onClick={() => toggleLanguage('ar')}
                        >
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                            <span className="text-gray-800 dark:text-gray-200 font-medium">عر</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">العربية</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Dashboard Preferences</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="defaultTimeRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Default Time Range
                      </label>
                      <select
                        id="defaultTimeRange"
                        name="defaultTimeRange"
                        value={formData.defaultTimeRange}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="quarter">Quarter</option>
                        <option value="year">Year</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="dashboardLayout" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dashboard Layout
                      </label>
                      <select
                        id="dashboardLayout"
                        name="dashboardLayout"
                        value={formData.dashboardLayout}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      >
                        <option value="grid">Grid Layout</option>
                        <option value="list">List Layout</option>
                        <option value="compact">Compact Layout</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="dataRetention" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Data Retention Period (days)
                      </label>
                      <input
                        type="number"
                        id="dataRetention"
                        name="dataRetention"
                        value={formData.dataRetention}
                        onChange={handleChange}
                        min="30"
                        max="365"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Data older than this will be automatically archived
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Data Export Settings</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="exportImages"
                          name="exportImages"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="exportImages" className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Images in Reports</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add high-resolution inspection images to exported reports</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="exportMetadata"
                          name="exportMetadata"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="exportMetadata" className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Metadata</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add technical metadata to exported reports</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="exportRawData"
                          name="exportRawData"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="exportRawData" className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Raw Data</label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Include raw sensor data in CSV format with exports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Team Management Tab */}
            {activeTab === 'team' && (
              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Team Members</h2>
                    <button className="mt-2 md:mt-0 btn btn-outline flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                      Invite Team Member
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                                JD
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Maintenance Manager</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            john.doe@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                              Admin
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">Edit</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                                JS
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Jane Smith</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Operations Director</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            jane.smith@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                              Owner
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">Edit</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                                RJ
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Robert Johnson</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Technician</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            robert.j@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Technician
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">Edit</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                                AL
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">Alice Lee</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Data Analyst</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            alice.lee@example.com
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300">
                              Analyst
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300">
                              Invited
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">Remind</button>
                            <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">Cancel</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Role Permissions</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Permission</th>
                          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner</th>
                          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Admin</th>
                          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Technician</th>
                          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Analyst</th>
                          <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Viewer</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            View Dashboard
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Manage Robots
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Generate Reports
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Manage Users
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Billing & Subscription
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <svg className="w-5 h-5 mx-auto text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white">Current Plan</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">You are currently on the Enterprise plan</p>
                    </div>
                    
                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 mt-2 md:mt-0">
                      Active
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Enterprise Plan</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">For large scale infrastructure monitoring</p>
                      </div>
                      
                      <div className="mt-4 md:mt-0">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$999</span>
                        <span className="text-gray-600 dark:text-gray-400">/month</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Unlimited robots</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Unlimited team members</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Custom AI model training</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">24/7 priority support</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">API access</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
                      <button className="btn btn-outline mb-3 sm:mb-0">Change Plan</button>
                      <button className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Payment Method</h2>
                  
                  <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded mr-4 flex items-center justify-center text-gray-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Credit Card ending in 4242</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Expires 12/2025</p>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      Update
                    </button>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Billing History</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Invoice</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">INV-2025-042</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Apr 5, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$999.00</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Download</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">INV-2025-032</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Mar 5, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$999.00</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Download</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">INV-2025-018</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Feb 5, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$999.00</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Download</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">INV-2025-006</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Jan 5, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">$999.00</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Download</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;