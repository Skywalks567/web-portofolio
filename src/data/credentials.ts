export interface Experience {
  id: string;
  title: string;
  period: string;
  summary: string;
  points: string[];
  image?: string;
  logo?: string;
  active: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image?: string;
  credentialUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Backend Developer Intern - PIPP, Universitas Padjadjaran',
    period: 'MAR 2026 - PRESENT',
    logo: '/credentials/experience/Unpad-Logo.jpeg',
    summary:
      'Developed scalable backend services using Next.js and Prisma, integrating secure authentication and robust RESTful APIs to manage and retrieve critical system data.',
    points: [
      'Architected and implemented scalable backend services using Next.js and Prisma ORM with a PostgreSQL database, designing efficient relational schemas to manage user data, system history, and administrative dashboard statistics.',
      'Integrated secure authentication and authorization flows by implementing Better Auth and robust session management, coupled with Nodemailer for automated email notifications and reliable user verification processes.',
      'Developed robust RESTful APIs and secure Server Actions for seamless data integration, specifically handling critical EEG data endpoints to ensure optimized performance and reliable data retrieval between the frontend and core backend systems.',
    ],
    image: '/credentials/experience/PIPP.jpeg',
    active: true,
  },
  {
    id: 'exp-2',
    title: 'Junior Cybersecurity Engineer Intern - PT VINIX SEVEN AURUM',
    period: 'AUG 2025 - DEC 2025',
    logo: '/credentials/experience/Vinix7-Logo.jpeg',
    summary:
      'Managed SIEM monitoring, executed vulnerability assessments, and secured virtual environments through custom PKI and disaster recovery strategies.',
    points: [
      'Managed Wazuh SIEM to monitor security events, detect network anomalies, and perform digital forensics to accelerate incident response.',
      'Executed vulnerability scans (Nessus, OpenVAS) and ethical hacking simulations, successfully mitigating critical flaws like SQL Injection to harden web servers.',
      'Secured virtual environments (OpenStack, Proxmox) and engineered a custom PKI (OpenSSL), ensuring encrypted communications and reliable disaster recovery via UrBackup.',
    ],
    image: '/credentials/experience/VINIX7.jpeg',
    active: false,
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    name: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'CISCO',
    date: 'July 2026',
    credentialUrl:
      'https://www.credly.com/badges/4df52950-9d38-4e91-952e-5202349712f4/public_url',
    image: '/credentials/certs/ccna3.png',
  },
  {
    id: 'cert-2',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'CISCO',
    date: 'June 2026',
    image: '/credentials/certs/ccna2.png',
    credentialUrl:
      'https://www.credly.com/badges/71834b70-e65c-4826-978c-64e5e67e34e6/public_url',
  },
  {
    id: 'cert-3',
    name: 'CCNA: Introduction to Networks',
    issuer: 'CISCO',
    date: 'May 2026',
    image: '/credentials/certs/ccna1.png',
    credentialUrl:
      'https://www.credly.com/badges/b07811b5-a812-4b39-9567-c57d8f13df19/public_url',
  },
  {
    id: 'cert-4',
    name: 'Certified Independent Study: Junior Cybersecurity Engineer',
    issuer: 'PT VINIX SEVEN AURUM (MSIB)',
    date: 'December 2025',
    image: '/credentials/certs/vinix7-msib.png',
  },
];
