export interface ContactChannel {
  name: string;
  label: string;
  url: string;
  displayValue: string;
  icon: 'Mail' | 'Phone' | 'Linkedin' | 'Github' | 'Facebook';
  primary: boolean;
  category: 'direct' | 'professional' | 'social';
}

export const CONTACT_INFO = {
  name: 'Angel Amaya Balion',
  role: 'Software Developer · Backend Engineering',
  email: 'angelamaya.balion@gmail.com',
  phone: '09764567794',
  phoneFormatted: '+63 976 456 7794',
  location: 'Lipa / Cabuyao, Laguna, Philippines',
  availability: 'Open to Software & Backend Developer Internships (2025/2026)',
  responseTime: '< 12 hours response latency',
  channels: [
    {
      name: 'Email',
      label: 'Direct Email Transmission',
      url: 'mailto:angelamaya.balion@gmail.com',
      displayValue: 'angelamaya.balion@gmail.com',
      icon: 'Mail',
      primary: true,
      category: 'direct'
    },
    {
      name: 'Mobile Phone',
      label: 'Call / SMS Direct Line',
      url: 'tel:09764567794',
      displayValue: '0976 456 7794',
      icon: 'Phone',
      primary: true,
      category: 'direct'
    },
    {
      name: 'LinkedIn',
      label: 'Professional Network',
      url: 'https://www.linkedin.com/in/angel-amayabalion/',
      displayValue: 'linkedin.com/in/angel-amayabalion',
      icon: 'Linkedin',
      primary: true,
      category: 'professional'
    },
    {
      name: 'GitHub',
      label: 'Open Source Repositories',
      url: 'https://github.com/amy9273',
      displayValue: 'github.com/amy9273',
      icon: 'Github',
      primary: true,
      category: 'professional'
    },
    {
      name: 'Facebook',
      label: 'Personal Social Profile',
      url: 'https://www.facebook.com/AngelAmaya.Balion',
      displayValue: 'facebook.com/AngelAmaya.Balion',
      icon: 'Facebook',
      primary: false,
      category: 'social'
    }
  ] as ContactChannel[]
};
