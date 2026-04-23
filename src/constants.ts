/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Job } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Product Designer for Wellness Tracking Mobile Application',
    platform: 'Upwork',
    postedAt: '2h ago',
    description: 'We are looking for a skilled Product Designer with a background in digital health or wellness apps. The project involves creating a comprehensive design system and prototyping key user flows for a React Native application...',
    skills: ['Figma', 'UX Research', 'Mobile Design', 'Prototyping'],
    budget: '$3,500',
    budgetType: 'Fixed Price',
  },
  {
    id: '2',
    title: 'Custom B2B Dashboard UI Kit & Component Library',
    platform: 'Fiverr Pro',
    postedAt: '5h ago',
    description: 'Require an expert UI designer to build a modular, high-density dashboard kit for a logistics enterprise platform. Must follow atomic design principles and provide full documentation...',
    skills: ['Design Systems', 'Dashboard UI', 'SaaS'],
    budget: '$1,200',
    budgetType: 'Per Milestone',
  },
  {
    id: '3',
    title: 'Front-end Developer for Dynamic Data Visualization Project',
    platform: 'Freelancer',
    postedAt: '8h ago',
    description: 'Looking for a D3.js or Chart.js specialist to implement complex real-time data charts into an existing React application. Needs to handle large datasets efficiently...',
    skills: ['React', 'D3.js', 'TypeScript'],
    budget: '$65 - $90',
    budgetType: 'Hourly Rate',
  },
];

export const RECOMMENDED_JOBS: Job[] = [
  {
    id: 'rec1',
    title: 'Senior UX Architect for Enterprise Fintech SaaS',
    platform: 'Upwork',
    postedAt: '1h ago',
    description: '',
    skills: [],
    budget: '$85 - $120/hr',
    budgetType: 'Hourly',
    matchPercentage: 98,
    featured: true
  },
  {
    id: 'rec2',
    title: 'Web3 Dashboard Redesign & Design System',
    platform: 'Fiverr Pro',
    postedAt: '30m ago',
    description: '',
    skills: [],
    budget: '$5,000 Fix',
    budgetType: 'Fixed',
    featured: false
  },
  {
    id: 'rec3',
    title: 'Full-Stack React Developer (Next.js 14)',
    platform: 'Freelancer.com',
    postedAt: '45m ago',
    description: '',
    skills: [],
    budget: '$90 - $150/hr',
    budgetType: 'Hourly',
    featured: false
  }
];
