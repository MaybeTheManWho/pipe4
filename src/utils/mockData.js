// Mock data for the PipeBot application

// Robots data
export const robots = [
  {
    id: 'robot-001',
    name: 'PipeBot Alpha',
    status: 'Active',
    location: 'North Plant - Section A',
    lastActive: '2 minutes ago',
    batteryLevel: 78,
    issuesDetected: 0,
    model: 'PB-X1000',
    serialNumber: 'PBAX1-2025-001',
    deployedDate: '2025-02-15',
    maintenanceSchedule: '2025-05-15',
    inspectionHistory: [
      { date: '2025-04-19', pipesInspected: 28, issuesFound: 0 },
      { date: '2025-04-18', pipesInspected: 32, issuesFound: 1 },
      { date: '2025-04-17', pipesInspected: 30, issuesFound: 0 },
    ]
  },
  {
    id: 'robot-002',
    name: 'PipeBot Beta',
    status: 'Idle',
    location: 'West Plant - Section C',
    lastActive: '1 hour ago',
    batteryLevel: 42,
    issuesDetected: 0,
    model: 'PB-X1000',
    serialNumber: 'PBBX1-2025-002',
    deployedDate: '2025-02-18',
    maintenanceSchedule: '2025-05-18',
    inspectionHistory: [
      { date: '2025-04-19', pipesInspected: 15, issuesFound: 0 },
      { date: '2025-04-18', pipesInspected: 26, issuesFound: 0 },
      { date: '2025-04-17', pipesInspected: 30, issuesFound: 2 },
    ]
  },
  {
    id: 'robot-003',
    name: 'PipeBot Gamma',
    status: 'Maintenance',
    location: 'East Plant - Section B',
    lastActive: '2 days ago',
    batteryLevel: 100,
    issuesDetected: 0,
    model: 'PB-X2000',
    serialNumber: 'PBGX2-2025-003',
    deployedDate: '2025-03-05',
    maintenanceSchedule: '2025-06-05',
    inspectionHistory: [
      { date: '2025-04-17', pipesInspected: 22, issuesFound: 1 },
      { date: '2025-04-16', pipesInspected: 28, issuesFound: 2 },
      { date: '2025-04-15', pipesInspected: 24, issuesFound: 0 },
    ]
  },
  {
    id: 'robot-004',
    name: 'PipeBot Delta',
    status: 'Error',
    location: 'South Plant - Section D',
    lastActive: '5 hours ago',
    batteryLevel: 12,
    issuesDetected: 3,
    model: 'PB-X2000',
    serialNumber: 'PBDX2-2025-004',
    deployedDate: '2025-03-10',
    maintenanceSchedule: '2025-06-10',
    inspectionHistory: [
      { date: '2025-04-19', pipesInspected: 8, issuesFound: 3 },
      { date: '2025-04-18', pipesInspected: 32, issuesFound: 1 },
      { date: '2025-04-17', pipesInspected: 28, issuesFound: 0 },
    ]
  }
];

// Alerts data
export const alerts = [
  {
    id: 'alert-001',
    title: 'Critical Crack Detected',
    message: 'A critical crack has been detected in pipe #21, 30cm from start point in high-pressure area.',
    robotId: 'robot-004',
    robotName: 'PipeBot Delta',
    timestamp: '2025-04-19, 10:23 AM',
    severity: 'High',
    location: 'South Plant - Section D',
    isResolved: false,
    type: 'error'
  },
  {
    id: 'alert-002',
    title: 'Minor Corrosion Detected',
    message: 'Minor corrosion detected in pipe #15, 120cm from entry point.',
    robotId: 'robot-003',
    robotName: 'PipeBot Gamma',
    timestamp: '2025-04-17, 02:45 PM',
    severity: 'Low',
    location: 'East Plant - Section B',
    isResolved: true,
    type: 'warning'
  },
  {
    id: 'alert-003',
    title: 'Robot Battery Low',
    message: 'PipeBot Delta battery level is below 15%. Please recharge or replace batteries.',
    robotId: 'robot-004',
    robotName: 'PipeBot Delta',
    timestamp: '2025-04-19, 12:10 PM',
    severity: 'Medium',
    location: 'South Plant - Section D',
    isResolved: false,
    type: 'warning'
  },
  {
    id: 'alert-004',
    title: 'Potential Leak Detected',
    message: 'Moisture analysis indicates potential small leak in pipe #08, junction point A5.',
    robotId: 'robot-002',
    robotName: 'PipeBot Beta',
    timestamp: '2025-04-17, 09:31 AM',
    severity: 'Medium',
    location: 'West Plant - Section C',
    isResolved: true,
    type: 'warning'
  },
  {
    id: 'alert-005',
    title: 'Scheduled Maintenance Due',
    message: 'PipeBot Gamma is due for scheduled maintenance in 2 days.',
    robotId: 'robot-003',
    robotName: 'PipeBot Gamma',
    timestamp: '2025-04-18, 08:00 AM',
    severity: 'Info',
    location: 'System',
    isResolved: false,
    type: 'info'
  }
];

// Chart data for dashboard
export const inspectionData = [
  { name: 'Jan', inspections: 240, issues: 12 },
  { name: 'Feb', inspections: 300, issues: 18 },
  { name: 'Mar', inspections: 280, issues: 15 },
  { name: 'Apr', inspections: 320, issues: 10 }
];

export const robotPerformanceData = [
  { name: 'PipeBot Alpha', performance: 96 },
  { name: 'PipeBot Beta', performance: 88 },
  { name: 'PipeBot Gamma', performance: 92 },
  { name: 'PipeBot Delta', performance: 72 }
];

export const issueTypeData = [
  { name: 'Cracks', value: 45 },
  { name: 'Corrosion', value: 30 },
  { name: 'Leaks', value: 15 },
  { name: 'Other', value: 10 }
];

export const dailyInspectionData = [
  { name: '04/13', alpha: 28, beta: 22, gamma: 25, delta: 20 },
  { name: '04/14', alpha: 32, beta: 30, gamma: 0, delta: 28 },
  { name: '04/15', alpha: 30, beta: 28, gamma: 24, delta: 30 },
  { name: '04/16', alpha: 29, beta: 26, gamma: 28, delta: 29 },
  { name: '04/17', alpha: 30, beta: 30, gamma: 22, delta: 28 },
  { name: '04/18', alpha: 32, beta: 26, gamma: 0, delta: 32 },
  { name: '04/19', alpha: 28, beta: 15, gamma: 0, delta: 8 }
];

// Stats summary for dashboard
export const statsSummary = {
  totalInspections: 1140,
  totalIssuesFound: 55,
  activeRobots: 2,
  inspectionRate: '98.5%'
};

// Alias for alerts to match the import in components
export const alertsData = alerts;

// Pie chart data for dashboard
export const pieData = [
  { name: 'Cracks', value: 45 },
  { name: 'Corrosion', value: 30 },
  { name: 'Leaks', value: 15 },
  { name: 'Other', value: 10 }
];

// Activity data for specific robot
export const robotActivityData = [
  { name: 'Mon', distance: 120, issues: 0 },
  { name: 'Tue', distance: 132, issues: 1 },
  { name: 'Wed', distance: 99, issues: 0 },
  { name: 'Thu', distance: 85, issues: 0 },
  { name: 'Fri', distance: 105, issues: 1 },
  { name: 'Sat', distance: 86, issues: 0 },
  { name: 'Sun', distance: 45, issues: 0 }
];

// Issues data for specific robot
export const robotIssuesData = [
  { name: 'Cracks', count: 12 },
  { name: 'Corrosion', count: 8 },
  { name: 'Joint Issues', count: 5 },
  { name: 'Debris', count: 4 },
  { name: 'Other', count: 2 }
];