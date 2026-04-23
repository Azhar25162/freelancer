/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Job {
  id: string;
  title: string;
  platform: 'Upwork' | 'Fiverr' | 'Freelancer.com' | 'Toptal' | 'Fiverr Pro' | 'Freelancer';
  postedAt: string;
  description: string;
  skills: string[];
  budget: string;
  budgetType: 'Fixed' | 'Hourly' | 'Fixed Price' | 'Hourly Rate' | 'Per Milestone';
  matchPercentage?: number;
  featured?: boolean;
}

export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Expert';

export interface UserProfile {
  skills: string[];
  experience: ExperienceLevel;
  hourlyRateRange: [number, number];
  platforms: string[];
}
