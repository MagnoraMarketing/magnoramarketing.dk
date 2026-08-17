import { Building, Zap, Coffee, Sun, Shield, Briefcase, Scale, Lightbulb, Umbrella, Bot } from 'lucide-react';

export interface JobListing {
  path: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

export const jobListings: JobListing[] = [
  {
    path: '/jobs/arbejd-hjemmefra',
    title: 'Arbejd hjemmefra',
    description: 'Få frihed og fleksibilitet med et job som freelance sælger eller mødebooker hjemmefra.',
    icon: Building,
    color: 'text-blue-600'
  },
  {
    path: '/jobs/forsikring-hjemmefra',
    title: 'Mødebooker - Forsikring (hjemmefra)',
    description: 'Arbejd 100% hjemmefra for Danmarks bedste forsikringsmæglere. Attraktiv løn, provision uden loft og fuld frihed over din arbejdsdag.',
    icon: Umbrella,
    color: 'text-cyan-600'
  },
  {
    path: '/jobs/ai-konsulent',
    title: 'AI-konsulent - Introducér AI til virksomheder',
    description: 'Kontakt virksomheder og giv dem indblik i AI-løsninger, der sparer tid. Fremtidssikret job 100% hjemmefra med attraktiv løn.',
    icon: Bot,
    color: 'text-violet-600'
  },
  {
    path: '/jobs/webudvikling-salg',
    title: 'Sælger - Webudvikling & Digitale Løsninger',
    description: 'Book kvalificerede møder for et af Danmarks førende digitale bureauer og hjælp virksomheder med at finde de rigtige marketingløsninger.',
    icon: Building,
    color: 'text-blue-600'
  },
  {
    path: '/jobs/led-belysning',
    title: 'Mødebooker - LED Belysning',
    description: 'Bliv mødebooker for Danmarks mest innovative LED-virksomhed og hjælp erhverv med energieffektive belysningsløsninger.',
    icon: Lightbulb,
    color: 'text-yellow-600'
  },
  {
    path: '/jobs/energi-salg',
    title: 'Sælger - Strøm B2C/B2B',
    description: 'Hjælp private og virksomheder med at spare på energien gennem optimerede strømløsninger og grønne alternativer.',
    icon: Zap,
    color: 'text-green-600'
  },
  {
    path: '/jobs/kaffe-service',
    title: 'Mødebooker - Kaffeservice',
    description: 'Hjælp virksomheder med at finde den perfekte kaffeløsning til deres medarbejdere og kunder.',
    icon: Coffee,
    color: 'text-amber-600'
  },
  {
    path: '/jobs/solenergi',
    title: 'Mødebooker - Vedvarende Energi',
    description: 'Vær med til at drive den grønne omstilling som mødebooker inden for solceller og vedvarende energi.',
    icon: Sun,
    color: 'text-orange-600'
  },
  {
    path: '/jobs/matte-service',
    title: 'Mødebooker - Måtteservice',
    description: 'Book møder for professionelle måtteservice løsninger og hjælp virksomheder med at skabe et renere arbejdsmiljø.',
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    path: '/jobs/pensionsordning',
    title: 'Mødebooker - Pension',
    description: 'Hjælp danskere med at sikre deres økonomiske fremtid gennem professionel pensionsrådgivning.',
    icon: Briefcase,
    color: 'text-indigo-600'
  },
  {
    path: '/jobs/inkasso',
    title: 'Mødebooker - Inkasso',
    description: 'Book møder for professionelle inkassoløsninger og hjælp virksomheder med debitorhåndtering.',
    icon: Scale,
    color: 'text-gray-600'
  }
];

// Filter out the main "arbejd-hjemmefra" page from the list when displaying on that page
export const getJobListingsForRemotePage = () => {
  return jobListings.filter(job => job.path !== '/jobs/arbejd-hjemmefra');
};