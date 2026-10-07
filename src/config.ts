import heroImage from './assets/hero-real.jpg';

export const SITE = {
  website: 'https://spai-lab.github.io/SPAI_LAB/',
  author: 'SP&AI Lab',
  description: 'SP&AI Lab, Department of Information and Communication Engineering, Changwon National University.',
  title: 'SP&AI Lab',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  
  // Lab Info
  labName: 'SP&AI Lab',
  university: '창원대학교 정보통신공학과',
  logo: '/assets/cwnu-symbol.svg', // Logo path
  avatar: '/assets/cwnu-symbol.svg', // Avatar for SEO/Schema
  email: 'TODO-lab-contact@cwnu.ac.kr', // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for each language by default
  hero: {
    title: 'Signal Processing & AI Research',
    subtitle: '창원대학교 정보통신공학과 SP&AI 연구실',
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Home', link: '/', key: 'home' },
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Achievements', link: '/achievements', key: 'achievements' },
    { text: 'Team', link: '/team', key: 'team' },
    { text: 'Activities', link: '/activities', key: 'activities' },
    { text: 'Join Us', link: '/join', key: 'join' },
    { text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ] as { text: string; link: string; key: string }[],

  // i18n Config
  i18n: {
    enabled: true,
    defaultLocale: 'ko',
  }
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://github.com/SPAI-Lab/SPAI_LAB',
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'en' | 'ko' = 'ko';
