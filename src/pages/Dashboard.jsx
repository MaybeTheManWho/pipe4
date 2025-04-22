import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import RobotCard from '../components/dashboard/RobotCard';
import Chart from '../components/dashboard/Chart';
import AlertCard from '../components/dashboard/AlertCard';
import { robots, inspectionData, alertsData, pieData } from '../utils/mockData';
import { useLanguage } from '../context/LanguageContext';

const Dashboard = ({ onLogout }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64 transition-all duration-300" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('common.dashboard')}</h1>
            <p className="text-gray-600 dark:text-gray-400">{t('dashboard.welcome')}</p>
          </div>
          
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('dashboard.activeRobots')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {robots.filter(robot => robot.status === 'Active').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            <div className="card p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('dashboard.inspectionDistance')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,284 m</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  18%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last week</span>
              </div>
            </div>
            
            <div className="card p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('dashboard.issuesDetected')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">24</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-red-600 dark:text-red-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  5%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            <div className="card p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('dashboard.maintenanceRequired')}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">7</p>
                </div>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">{t('dashboard.nextScheduled')}</span>
              </div>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Chart
                type="line"
                data={inspectionData}
                title={t('dashboard.inspectionActivity')}
                subtitle={t('dashboard.inspectionSubtitle')}
              />
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Chart
                type="pie"
                data={pieData}
                title={t('dashboard.issueDistribution')}
                subtitle={t('dashboard.issueSubtitle')}
              />
            </div>
          </div>
          
          {/* Recent Robots & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('dashboard.activeRobots')}</h2>
                <Link to="/robots" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center group">
                  {t('dashboard.viewAll')}
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-6">
                {robots.slice(0, 3).map((robot, index) => (
                  <div key={robot.id} className="animate-fade-in" style={{animationDelay: `${0.8 + (index * 0.1)}s`}}>
                    <RobotCard robot={robot} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.1s'}}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('dashboard.recentAlerts')}</h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center group">
                  {t('dashboard.viewAll')}
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {alertsData.slice(0, 5).map((alert, index) => (
                  <div key={alert.id} className="animate-fade-in" style={{animationDelay: `${1.2 + (index * 0.1)}s`}}>
                    <AlertCard alert={alert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;