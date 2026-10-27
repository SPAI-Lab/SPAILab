import heroImage from './assets/hero-real.jpg';

export const SITE = {
  website: 'https://spai-lab.github.io/SPAILab/',
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
  logo: '/assets/cwnu-symbol.svg', // Changwon National University symbol used in the site header
  avatar: '/assets/spai-symbol.png', // Avatar for SEO/Schema
  // Physical locations (shown in the footer and on the Join page)
  locations: [
    { key: 'location.student', text: 'Student Lab: Bldg. 51, Room 328' },
    { key: 'location.professor', text: "Professor's Office: Bldg. 51, Room 320" },
  ],
  // Contact (source: department staff page, changwon.ac.kr/it)
  email: 'jwseok@changwon.ac.kr', // Principal Investigator; used by the Join Us page and footer
  phone: '055-213-3836',
  deptUrl: 'https://www.changwon.ac.kr/it/', // Department of Information and Communication Engineering
  address: '(51140) 경남 창원시 의창구 창원대학로 20 공과대학 정보통신공학과',

  // Hero Section (Home Page) - Main content does not need to be translated for each language by default
  hero: {
    title: 'SP&AI',
    subtitle: 'Sonar, audio and multimedia signal processing, powered by deep learning.',
    eyebrow: 'Signal Processing & AI Laboratory',
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Achievements', link: '/achievements', key: 'achievements' },
    { text: 'Team', link: '/team', key: 'team' },
    { text: 'Activities', link: '/activities', key: 'activities' },
    { text: 'Writing', link: '/writing', key: 'writing' },
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
    link: 'https://github.com/SPAI-Lab',
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'en' | 'ko' = 'ko';
