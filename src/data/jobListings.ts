import { Building, Zap, Coffee, Sun, Shield, Briefcase, Scale, Lightbulb, Umbrella, Bot } from 'lucide-react';

export interface JobListing {
  path: string;
  /** Title and description live in src/i18n/locales/{da,en,es}/common.ts under jobListings.<key>. */
  key: string;
  icon: any;
  color: string;
  /**
   * Date the posting went live (YYYY-MM-DD). Listings with a date get JobPosting
   * structured data (Google for Jobs) via <SEO>; update it when the job is re-opened.
   * The general "arbejd hjemmefra" hub has none, since it is not a single job.
   */
  datePosted?: string;
}

export const jobListings: JobListing[] = [
  {
    path: '/jobs/arbejd-hjemmefra',
    key: 'remoteWork',
    icon: Building,
    color: 'text-blue-600'
  },
  {
    path: '/jobs/forsikring-hjemmefra',
    key: 'insuranceBroker',
    icon: Umbrella,
    datePosted: '2026-11-04',
    color: 'text-cyan-600'
  },
  {
    path: '/jobs/ai-konsulent',
    key: 'aiConsultant',
    icon: Bot,
    datePosted: '2026-11-04',
    color: 'text-violet-600'
  },
  {
    path: '/jobs/webudvikling-salg',
    key: 'webBureau',
    icon: Building,
    datePosted: '2026-11-04',
    color: 'text-blue-600'
  },
  {
    path: '/jobs/led-belysning',
    key: 'ledLighting',
    icon: Lightbulb,
    datePosted: '2026-11-04',
    color: 'text-yellow-600'
  },
  {
    path: '/jobs/energi-salg',
    key: 'energySales',
    icon: Zap,
    datePosted: '2026-11-04',
    color: 'text-green-600'
  },
  {
    path: '/jobs/kaffe-service',
    key: 'coffeeService',
    icon: Coffee,
    datePosted: '2026-11-04',
    color: 'text-amber-600'
  },
  {
    path: '/jobs/solenergi',
    key: 'solarEnergy',
    icon: Sun,
    datePosted: '2026-11-04',
    color: 'text-orange-600'
  },
  {
    path: '/jobs/matte-service',
    key: 'matService',
    icon: Shield,
    datePosted: '2026-11-04',
    color: 'text-purple-600'
  },
  {
    path: '/jobs/pensionsordning',
    key: 'pension',
    icon: Briefcase,
    datePosted: '2026-11-04',
    color: 'text-indigo-600'
  },
  {
    path: '/jobs/inkasso',
    key: 'debtCollection',
    icon: Scale,
    datePosted: '2026-11-04',
    color: 'text-gray-600'
  }
];

// Filter out the main "arbejd-hjemmefra" page from the list when displaying on that page
export const getJobListingsForRemotePage = () => {
  return jobListings.filter(job => job.path !== '/jobs/arbejd-hjemmefra');
};