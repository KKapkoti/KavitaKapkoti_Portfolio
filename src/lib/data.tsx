import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
// import LogoSocket from '/public/images/logos/icon-socket.svg';
// import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoSQL from '/public/images/logos/mysql-logo.png';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoPostman from '/public/images/logos/postman-logo.png';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFramer from '/public/images/logos/framer-logo.svg';
import LogoFramerLight from '/public/images/logos/framer-logo-light.svg'
import LogoGit from '/public/images/logos/icon-git.svg';

import logoAicte from '/public/images/AICTE-Logo.png';
import LogoTheSparksFoundation from '/public/images/logo-TheSparksFoundation-light.png';
import LogoTheSparksFoundationLight from '/public/images/logo-TheSparksFoundation-light.png';

import ProjectWellness from '/public/images/project1.jpg';
import LeaveManagementSystem from '/public/images/LMS.jpg';
import BasicBankingSystem from '/public/images/BankingSystem.jpg';

import UTU from '/public/images/utu-logo.png';
import KU from '/public/images/logo-print.png';
import UKboard from '/public/images/UK-logo.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  EducationDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/KKapkoti',
  GITHUB_REPO: 'https://github.com/KKapkoti/',
  Linkedin: 'https://www.linkedin.com/in/kavita-kapkoti-42465b248',
  TWITTER: 'https://twitter.com/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/KKapkoti',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/kavita-kapkoti-42465b248',
  },
  {
    icon: Twitter,
    url: 'https://www.twitter.com/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [

  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
    {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
    {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
    {
    label: 'Framer',
    logo: LogoFramer,
    darkModeLogo: LogoFramerLight,
    url: 'https://framer.com/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  },
    {
    label: 'SQL',
    logo: LogoSQL,
    url: 'https://www.sql.org/',
  },


  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: logoAicte,
    logoAlt: 'Aicte logo',
    position: 'MERN Stack',
    startDate: new Date(2025, 1),
    endDate: new Date(2025, 2),
    summary: [
      'Completed a 6-week internship under the Next Gen Employability Program.',
      'Trained on building modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Gained hands-on experience in full stack development, covering both frontend and backend concepts.',
      'Internship conducted in collaboration with EY Global Delivery Services & AICTE.',
    ],
  },
  {
    logo: LogoTheSparksFoundation,
    darkModeLogo: LogoTheSparksFoundationLight,
    logoAlt: 'The Sparks Foundation logo',
    position: 'web developer intern',
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 3),
    summary: [
      'Collaborated on designing and developing responsive web applications using the MERN stack.',
      'Updated existing features and implemented new modules to enhance user experience.',
      'Built a dynamic web interface integrated with a dummy database for transaction simulations.',
      'Developed a customizable transaction flow to enable simplified customer interactions.',
      'Tech Stack: MongoDB, Express.js, React.js, Node.js (MERN)'
    ],
  },
  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: 'Dotnpixel logo',
  //   position: 'Full Stack Developer',
  //   startDate: new Date(2024, 3),
  //   endDate: new Date(2024, 4),
  //   summary: ['Worked as a web developer intern(React / Laravel).'],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wellness',
    description:
      'An innovativeAI-powered mental health support platform that aims to break the stigma surrounding mental health issues and provide accessible, personalized, and comprehensive resources to users. By leveraging natural language processing (NLP) and machine learning (ML), Wellness recognizes emotions from text inputs, offering empathetic and tailored responses to support users on their mental health journey.',
    url: 'https://github.com/KKapkoti/AI-Powered-Mental-Health-Chatbot-with-Emotion-Recognition',
    previewImage: ProjectWellness,
    technologies: [
      'Figma',
      'React',
      'Node.js',
      'React Bootstrap',
      'Express.js',
      'MongoDB',
      'NLP',
      'ML',
      'AWS'
    ],
  },
  {
    name: 'LeaveManagementSystem',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://github.com/KKapkoti/leave_management_system',
    previewImage: LeaveManagementSystem,
    technologies: [
      'React',
      'Node.js',
      'Postman',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'BasicBankingSystem',
    description:
      'Built a secure MERN stack banking system with seamless fund transfers, RESTful APIs for data management, and a responsive React frontend for viewing customer and transaction details.',
    url: 'https://stately-malasada-4cade2.netlify.app/',
    previewImage: BasicBankingSystem,
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Postman',
      'netlify',
    ],
  },
];

export const Education: EducationDetails[] = [
  {
    personName: 'B.Tech CSE',
    personAvatar: UTU,
    title: 'University-Uttarakhand Technical University',
    education:
       'Completed 4-year undergraduate degree with a focus on full stack development, data structures, and modern web technologies.',
    startDate: new Date(2022, 8),
    endDate: new Date(2025, 6),
  },
  {
    personName: 'B.Sc PCM',
    personAvatar: KU,
    title: 'University - Kumaun University',
    education:
       'Completed undergraduate studies with a strong foundation in analytical and scientific thinking.',
    startDate: new Date(2019, 5),
    endDate: new Date(2022, 4),
  },
  {
    personName: 'Senior Secondary PCM',
    personAvatar: UKboard,
    title: 'Board-Uttarakhand Board',
    education:
      'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.',
    startDate: new Date(2018, 6),
    endDate: new Date(2019, 4),
  },
];
